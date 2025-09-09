import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { corsHeaders } from './_shared/cors.ts';

// Main function to handle requests
Deno.serve(async (req) => {
  // This is needed for the browser's preflight request (OPTIONS)
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // 1. Get Trello secrets from Supabase Vault
    // Note: The service_role key is required to access the vault.
    // The Edge Function environment automatically has this key available.
    const serviceRoleClient = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    const trelloApiKey = Deno.env.get('TRELLO_API_KEY');
    const trelloApiToken = Deno.env.get('TRELLO_API_TOKEN');
    const trelloListId = Deno.env.get('TRELLO_LIST_ID');

    if (!trelloApiKey || !trelloApiToken || !trelloListId) {
      throw new Error('Missing required Trello environment variables.');
    }

    // 2. Extract and validate form data from the request body
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields: name, email, message' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      });
    }

    // 3. Insert the new message into the Supabase table
    // We use the serviceRoleClient to bypass RLS.
    const { error: insertError } = await serviceRoleClient
      .from('contact_messages')
      .insert({ name, email, message });

    if (insertError) {
      console.error('Supabase insert error:', insertError);
      throw new Error('Failed to save the message.');
    }

    // 4. Send the data to Trello to create a new card
    const trelloCardTitle = `New Contact Form Submission from ${name}`;
    const trelloCardDescription = `**Name:** ${name}\n**Email:** ${email}\n\n**Message:**\n${message}`;

    const trelloApiUrl = `https://api.trello.com/1/cards?idList=${trelloListId}&key=${trelloApiKey}&token=${trelloApiToken}`;

    const trelloResponse = await fetch(trelloApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: trelloCardTitle,
        desc: trelloCardDescription,
        pos: 'top',
      }),
    });

    if (!trelloResponse.ok) {
      const trelloErrorText = await trelloResponse.text();
      console.error('Trello API error:', trelloErrorText);
    }

    // 5. Return a success response
    return new Response(JSON.stringify({ success: true, message: 'Message received and processed.' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });

  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});
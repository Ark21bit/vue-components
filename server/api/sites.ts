import { serverSupabaseClient } from "#supabase/server";
export default eventHandler(async event => {
	const client = serverSupabaseClient(event);
	const { data, error, status, statusText } = await client.from("sites").select();
    if (error) throw createError({statusCode:status ,message:statusText})
	return { data };
});

const secretKey = process.env.IVANDT_SECRET_KEY;

export default defineEventHandler(async (event) => {
  let response;
  try {
    response = await fetch("https://api.ivandt.com/api/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${secretKey}`,
      },
      body: JSON.stringify({
        endUserId: "some-user-id-for-tracking",
        endUserEmail: "john-doe@gmail.com",
        expiresIn: 3600,
      }),
    });
  } catch (e) {
    console.error('ERROR ', e);
  }

  if (response) {
    const data = await response.json();
    return data;
  } else {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to create session'
    });
  }
});

export const dbConfig = () => {
  return {
    firebaseCredentials: {
      type: process.env.DB_TYPE,
      project_id: process.env.DB_PROJECT_ID,
      private_key_id: process.env.DB_PRIVATE_KEY_ID,
      private_key: process.env.DB_PRIVATE_KEY,
      client_email: process.env.DB_CLIENT_EMAIL,
      client_id: process.env.DB_CLIENT_ID,
      auth_uri: process.env.DB_AUTH_URI,
      token_uri: process.env.DB_TOKEN_URI,
      auth_provider_x509_cert_url: process.env.DB_AUTH_PROVIDER_X509_CERT_URL,
      client_x509_cert_url: process.env.DB_CLIENT_X509_CERT_URL,
      universe_domain: process.env.DB_UNIVERSE_DOMAIN,
    },
  };
};

export const jwtConfig = () => ({
  secret: process.env.JWT_SECRET,
  expiresIn: process.env.JWT_EXPIRATION_TIME_IN_SECONDS,
});

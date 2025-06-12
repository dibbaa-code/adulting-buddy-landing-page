# Firebase Admin SDK Setup

This guide will help you set up Firebase Admin SDK for your Adulting Buddy landing page.

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=your-client-email
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nyour-private-key-here\n-----END PRIVATE KEY-----"
```

## Getting Firebase Admin Credentials

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Go to Project Settings > Service Accounts
4. Click "Generate new private key"
5. Download the JSON file

## Extracting Values from Service Account JSON

From the downloaded JSON file, extract these values:

- `FIREBASE_PROJECT_ID`: The value of `project_id` field
- `FIREBASE_CLIENT_EMAIL`: The value of `client_email` field
- `FIREBASE_PRIVATE_KEY`: The value of `private_key` field (keep the quotes and newlines)

## Security Notes

- Never commit `.env.local` to version control
- Keep your private key secure
- Use environment variables in production (Vercel, Netlify, etc.)

## Collection Structure

The app will create documents in the `alpha-sign-ups` collection with this structure:

```javascript
{
  email: "user@example.com",
  createdAt: Timestamp,
  timestamp: 1234567890
}
```

## Testing

Once configured, you can test the signup functionality by:

1. Starting your development server: `npm run dev`
2. Visiting `http://localhost:3000`
3. Entering an email in the signup form
4. Checking your Firestore console for the new document

## Production Deployment

For production deployments, set the environment variables in your hosting platform:

### Vercel

```bash
vercel env add FIREBASE_PROJECT_ID
vercel env add FIREBASE_CLIENT_EMAIL
vercel env add FIREBASE_PRIVATE_KEY
```

### Netlify

Add the variables in Site Settings > Environment Variables

### Other Platforms

Follow your platform's documentation for setting environment variables.

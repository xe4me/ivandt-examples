import { useEffect, useRef, useState } from 'react';
import IvtImporter from '@ivandt/importer-react';
import type { IvtSchema } from '@ivandt/importer';

const publicKey = process.env.REACT_APP_PUBLIC_KEY as string;

function CustomerImporter() {
  const [isLoading, setIsLoading] = useState(true);
  const [sessionToken, setSessionToken] = useState<string | null>(null);

  const schema: IvtSchema = {
    title: 'Customer Import',
    key: 'customer-import',
    publicKey,
    sessionToken: sessionToken || '',
    fields: [
      {
        type: 'text',
        label: 'Full Name',
        key: 'fullName',
        order: 1,
        validators: [{type: 'required'}]
      },
    ],

    // Event handlers
    eventHandlers: {
      onSubmit: async (tableRows, meta, cellErrors, submitMeta) => {
        console.log('Imported data:', tableRows);
      }
    }
  };
  useEffect(() => {
    async function initializeImporter() {
      setIsLoading(true);
      // Fetch session token from YOUR backend
      const response = await fetch('/api/get-import-session', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          templateId: 'your-template-uuid',
        }),
      });
      setIsLoading(false)
      const {sessionToken, publicKey} = await response.json();
      setSessionToken(sessionToken)
    }

    initializeImporter();
  }, []);

  if (isLoading || !sessionToken) return <div>Getting session...</div>;

  return <IvtImporter schema={schema}/>;
}

export default CustomerImporter;

'use client'
import styles from "./page.module.css";
import { IvtSchema } from '@ivandt/importer';
import { useIvandtSession } from '@/app/hooks/useIvandtSession';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

import type { IvtImporterProps } from '@ivandt/importer-react';

const IvtImporter = dynamic<IvtImporterProps>(
    () => import('@ivandt/importer-react'),
    {
      ssr: false,
      loading: () => (
          <div className={styles.loading}>Loading importer ...</div>
      ),
    },
);
export default function Home() {
  const {session, isLoading} = useIvandtSession();
  const router = useRouter();

  const schema: IvtSchema = {
    id: '',
    key: 'Ivandt-in-NextJS',
    publicKey: process.env.NEXT_PUBLIC_IVANDT_PUBLIC_KEY || '',
    sessionToken: session?.sessionToken || "",
    title: 'Transformers test',
    stepsConfig: {
      uploadFileStep: {
        maxFileSize: 300 * 1024 * 1024
      },
      mapHeadersStep: {
        intelligentImport: true
      },
      reviewStep: {
        invalidDataBehaviour: 'remove_invalid_rows'
      }
    },
    fields: [
      {
        type: 'text',
        label: 'Business name',
        key: 'businessName',

        validators: [
          {
            type: 'required',
            message:
                'This field is required, but I want the message to be long so I can test the smart fix button inside the cell tooltip, so there you go!'
          }
        ],
        order: 1
      },
      {
        type: 'numeric',
        label: 'Employee count',
        key: 'employeeCount',
        description: 'How many employees does this company have?',
        validators: [
          {
            type: 'numeric',
            allowDecimals: false
          },
          {
            type: 'range',
            min: 10,
            max: 2000
          }
        ],
        order: 2
      },
      {
        type: 'monetary',
        label: 'Cost',
        key: 'cost',
        locale: 'English (United Kingdom)',
        average: true,
        description:
            'How much did they pay for the API and did they take a long time and have to write a long email?',
        order: 3
      },
      {
        type: 'text',
        label: 'Phone number',
        key: 'phoneNumber',
        validators: [{type: 'phone', countries: ['AU', 'US', 'DE'], severity: 'w'}],
        order: 4
      },
      {
        type: 'text',
        label: 'Website',
        key: 'website',
        validators: [{type: 'url'}],
        order: 5
      },
      {
        type: 'text',
        label: 'Access token',
        key: 'accessToken',
        validators: [{type: 'required'}, {type: 'uuid', version: '4'}],
        order: 6
      },
      {
        type: 'checkbox',
        label: 'Active',
        key: 'isActive',
        validators: [],
        order: 7
      },
      {
        type: 'text',
        label: 'Company email',
        key: 'companyEmail',
        validators: [{type: 'email'}],
        order: 8
      },

    ],
    eventHandlers:{
      onSubmit: async (tableRows, meta, cellErrors, submitMeta) => {
        router.push('/success');
      }
    }
  }

  if (isLoading || !schema.sessionToken) {
    return <div className={styles.loading}>
      Creating session...
    </div>
  }
  return (
      <div className={styles.page}>
        <IvtImporter schema={schema}/>
      </div>
  );
}

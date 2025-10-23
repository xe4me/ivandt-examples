<script setup lang="ts">
import type { IvtSchema } from '@ivandt/importer';
import { IvtImporter } from '@ivandt/importer-vue';

const router = useRouter();
const config = useRuntimeConfig();

const { data: session, pending: isLoading } = await useFetch('/api/sessions');

const schema = computed<IvtSchema>(() => ({
  id: '',
  key: 'Ivandt-in-Nuxt',
  publicKey: config.public.ivandtPublicKey || '',
  sessionToken: session.value?.sessionToken || "",
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
      validators: [{ type: 'phone', countries: ['AU', 'US', 'DE'], severity: 'w' }],
      order: 4
    },
    {
      type: 'text',
      label: 'Website',
      key: 'website',
      validators: [{ type: 'url' }],
      order: 5
    },
    {
      type: 'text',
      label: 'Access token',
      key: 'accessToken',
      validators: [{ type: 'required' }, { type: 'uuid', version: '4' }],
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
      validators: [{ type: 'email' }],
      order: 8
    }
  ],
  eventHandlers: {
    onSubmit: async (tableRows, meta, cellErrors, submitMeta) => {
      router.push('/success');
    }
  }
}));
</script>

<template>
  <div class="page">
    <div v-if="isLoading || !schema.sessionToken" class="loading">
      Creating session...
    </div>
    <ClientOnly v-else>
      <IvtImporter :schema="schema" />
      <template #fallback>
        <div class="loading">Loading importer...</div>
      </template>
    </ClientOnly>
  </div>
</template>

<style scoped>
.page {
  height: 100svh;
  width: 100vw;
}

.loading {
  height: 100svh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Light Theme */
:root[data-theme='light'] ivt-importer,
:root:not([data-theme]) ivt-importer {
  --ivt-color-base: oklch(98% 0.002 247.839);



  --ivt-color-base-content: oklch(21% 0.034 264.665);
  --ivt-color-primary: oklch(0.539 0.166 137.744);
  --ivt-color-primary-content: oklch(96% 0.016 293.756);

  --ivt-color-secondary: oklch(0.797 0.164 81.768);
  --ivt-color-secondary-content: oklch(96% 0.015 12.422);

  --ivt-color-accent: oklch(68% 0.169 237.323);
  --ivt-color-accent-content: oklch(97% 0.013 236.62);

  --ivt-color-neutral: oklch(44% 0.03 256.802);
  --ivt-color-neutral-content: oklch(98% 0.002 247.839);

  --ivt-color-info: oklch(60% 0.126 221.723);
  --ivt-color-bg-info: oklch(60% 0.126 221.723/0.6);
  --ivt-color-info-content: oklch(98% 0.019 200.873);

  --ivt-color-success: oklch(59% 0.145 163.225);
  --ivt-color-bg-success: oklch(59% 0.145 163.225/0.6);
  --ivt-color-success-content: oklch(97% 0.021 166.113);

  --ivt-color-warning: oklch(66% 0.179 58.318);
  --ivt-color-bg-warning: oklch(66% 0.179 58.318/0.6);
  --ivt-color-warning-content: oklch(98% 0.022 95.277);

  --ivt-color-error: oklch(59% 0.249 0.584);
  --ivt-color-bg-error: oklch(0.641 0.227 26.483 / 0.1);
  --ivt-color-error-content: oklch(97% 0.014 343.198);

  --ivt-radius-selector: 0.25rem;
  --ivt-radius-field: 0.25rem;
  --ivt-radius-box: 0.5rem;
  --ivt-size-selector: 0.25rem;
  --ivt-size-field: 0.25rem;
  --ivt-border: 1px;
  --ivt-depth: 0;
  --ivt-noise: 0;
}

/* Dark Theme */
:root[data-theme='dark'] ivt-importer {
  --ivt-color-base: oklch(18% 0.008 264.665);



  --ivt-color-base-content: oklch(92% 0.006 264.531);
  --ivt-color-primary: oklch(0.639 0.186 137.744);
  --ivt-color-primary-content: oklch(18% 0.016 137.744);

  --ivt-color-secondary: oklch(0.697 0.144 81.768);
  --ivt-color-secondary-content: oklch(18% 0.015 81.768);

  --ivt-color-accent: oklch(58% 0.149 237.323);
  --ivt-color-accent-content: oklch(18% 0.013 237.323);

  --ivt-color-neutral: oklch(34% 0.02 256.802);
  --ivt-color-neutral-content: oklch(92% 0.006 264.531);

  --ivt-color-info: oklch(70% 0.146 221.723);
  --ivt-color-bg-info: oklch(70% 0.146 221.723/0.3);
  --ivt-color-info-content: oklch(18% 0.019 221.723);

  --ivt-color-success: oklch(69% 0.165 163.225);
  --ivt-color-bg-success: oklch(69% 0.165 163.225/0.3);
  --ivt-color-success-content: oklch(18% 0.021 163.225);

  --ivt-color-warning: oklch(76% 0.199 58.318);
  --ivt-color-bg-warning: oklch(76% 0.199 58.318/0.3);
  --ivt-color-warning-content: oklch(18% 0.022 58.318);

  --ivt-color-error: oklch(69% 0.269 0.584);
  --ivt-color-bg-error: oklch(0.741 0.247 26.483 / 0.15);
  --ivt-color-error-content: oklch(18% 0.014 0.584);

  --ivt-radius-selector: 0.25rem;
  --ivt-radius-field: 0.25rem;
  --ivt-radius-box: 0.5rem;
  --ivt-size-selector: 0.25rem;
  --ivt-size-field: 0.25rem;
  --ivt-border: 1px;
  --ivt-depth: 0;
  --ivt-noise: 0;
}
</style>

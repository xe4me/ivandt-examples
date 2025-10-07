<template>
  <ivt-importer :schema="schema" />
</template>

<script setup lang="ts">
import "@ivandt/importer/importer";
import type { DefaultTableRowType, IvtSchema } from "@ivandt/importer";

interface Props<TableRow = DefaultTableRowType> {
  schema: IvtSchema<TableRow>;
}

defineProps<Props>();
</script>

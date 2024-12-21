/* eslint-disable perfectionist/sort-objects */
import { list } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access'
import { relationship, text } from '@keystone-6/core/fields'

export const Product = list({
  access: allowAll,
  fields: {
    category: relationship({
      label: 'Категория',
      ref: 'Category.products',
      ui: {
        hideCreate: true,
      },
    }),
    description: text({
      label: 'Описание',
      ui: {
        displayMode: 'textarea',
      },
    }),
    filters: relationship({
      label: 'Фильтры',
      many: true,
      ref: 'Filter.products',
      ui: {
        labelField: 'relationshipLabel',
      },
    }),
    name: text({
      label: 'Название',
    }),
    // variants: filterVariants(),
    variants: relationship({
      label: 'Варианты',
      many: true,
      ref: 'Variant.product',
    }),
    features: relationship({
      label: 'Характеристики',
      many: true,
      ref: 'FeatureValue.products',
    }),
  },
  ui: {
    listView: {
      initialColumns: ['name', 'category', 'filters'],
    },
  },
})

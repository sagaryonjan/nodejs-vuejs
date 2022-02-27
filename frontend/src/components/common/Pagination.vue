<template>
  <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
    <span></span>
    <div>
      <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
        <a
          v-if="props.pagination.page > 1"
          class="
            relative
            inline-flex
            items-center
            px-2
            py-2
            rounded-l-md
            border border-gray-300
            bg-white
            text-sm
            font-medium
            text-gray-500
            hover:bg-gray-50
          "
          href="#"
          @click.prevent="changePage(props.pagination.page - 1)"
        >
          <span class="sr-only">Previous</span>
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        <!-- :class="{ active: page == props.pagination.page }" -->
        <div v-for="page in pagesNumber">
          <a
            href="#"
            :class="{
              'bg-blue-500 text-white': page === props.pagination.page,
            }"
            class="z-10 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            aria-current="page"
            @click.prevent="changePage(page)"
          >
            {{ page }}
          </a>
        </div>

        <a
          v-if="props.pagination.page < props.pagination.totalPages"
          href="#"
          class="
            relative
            inline-flex
            items-center
            px-2
            py-2
            rounded-r-md
            border border-gray-300
            bg-white
            text-sm
            font-medium
            text-gray-500
            hover:bg-gray-50
          "
          @click.prevent="changePage(props.pagination.page + 1)"
        >
          <span class="sr-only">Next</span>
          <!-- Heroicon name: solid/chevron-right -->
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const emit = defineEmits(['updateCurrentPage']);

const props = defineProps({
  pagination: {
    type: Object,
    required: true,
  },
  offset: {
    type: Number,
    default: 4,
  },
});

const pagesNumber = computed(() => {
  if (!props.pagination.pageSize) {
    return [];
  }
  let from = props.pagination.page - props.offset;
  if (from < 1) {
    from = 1;
  }
  let to = from + props.offset * 2;
  if (to >= props.pagination.totalPages) {
    to = props.pagination.totalPages;
  }
  const pagesArray = [];
  for (let page = from; page <= to; page++) {
    pagesArray.push(page);
  }
  return pagesArray;
});

const changePage = page => {
  emit('updateCurrentPage', page);
};
</script>

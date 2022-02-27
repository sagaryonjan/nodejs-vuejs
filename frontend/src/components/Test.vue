<template>
  <div class="test">
    <br />

    <div class="container mx-auto px-4 sm:px-8">
      <div class="py-8">
        <div class="flex justify-between">
          <span></span>
          <button
            class="rounded bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white flex items-center"
            @click.prevent="onClickCreateLog"
          >
            <div class="mr-2">
              <svg fill="#fff" width="12" height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455 455">
                <path d="M455 212.5H242.5V0h-30v212.5H0v30h212.5V455h30V242.5H455z" />
              </svg>
            </div>
            Create Log
          </button>
        </div>
        <div class="flex justify-between">
          <h2 class="text-2xl font-semibold leading-tight">List of Logs</h2>
        </div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    class="
                      px-5
                      py-3
                      border-b-2 border-gray-200
                      bg-gray-100
                      text-left text-xs
                      font-semibold
                      text-gray-700
                      uppercase
                    "
                  ></th>
                  <th
                    class="
                      px-5
                      py-3
                      border-b-2 border-gray-200
                      bg-gray-100
                      text-left text-xs
                      font-semibold
                      text-gray-700
                      uppercase
                    "
                  >
                    Date and Time
                  </th>
                  <th
                    class="
                      px-5
                      py-3
                      border-b-2 border-gray-200
                      bg-gray-100
                      text-left text-xs
                      font-semibold
                      text-gray-700
                      uppercase
                    "
                  >
                    IP Address
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="log in logs.data">
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-left">
                    <p class="text-gray-900 whitespace-no-wrap">#{{ log.id }}</p>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-left">
                    <p class="text-gray-900 whitespace-no-wrap">{{ log.ip }}</p>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-left">
                    <p class="text-gray-900 whitespace-no-wrap">{{ log.created_at }}</p>
                  </td>
                </tr>
              </tbody>
            </table>

            <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
              <div class="flex-1 flex justify-between sm:hidden">
                <a
                  href="#"
                  class="
                    relative
                    inline-flex
                    items-center
                    px-4
                    py-2
                    border border-gray-300
                    text-sm
                    font-medium
                    rounded-md
                    text-gray-700
                    bg-white
                    hover:bg-gray-50
                  "
                >
                  Previous
                </a>
                <a
                  href="#"
                  class="
                    ml-3
                    relative
                    inline-flex
                    items-center
                    px-4
                    py-2
                    border border-gray-300
                    text-sm
                    font-medium
                    rounded-md
                    text-gray-700
                    bg-white
                    hover:bg-gray-50
                  "
                >
                  Next
                </a>
              </div>

              <Pagination
                v-if="logs.total > logs.pageSize"
                :pagination="logs"
                :offset="2"
                @updateCurrentPage="updateCurrentPage"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Pagination from './common/Pagination.vue';

import { createLog, fetchLogs } from '../services/log';

const logs = ref([]);

const updateCurrentPage = (page: number) => {
  getLogs(page);
};

const onClickCreateLog = async () => {
  try {
    await createLog();
    getLogs();
  } catch (e) {
    console.log(e);
  }
};

const getLogs = async (page = 1) => {
  const { data } = await fetchLogs(page);

  logs.value = data;
};

getLogs();
</script>

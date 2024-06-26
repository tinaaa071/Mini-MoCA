// Variable to store the original content of tab-content2
let originalTabContent;

// Function to add event listeners to change-content-button buttons
function addEventListenersToButtons() {
  document.querySelectorAll('.change-content-button').forEach(button => {
    button.addEventListener('click', function() {
      // Remove the active class from all buttons
      document.querySelectorAll('.change-content-button').forEach(btn => btn.classList.remove('active'));

      
      // Get the content element within basic-tabs-2
      const tabContentElement = document.getElementById('tab-content2');
      
      // If originalTabContent is not yet set, store the current content of tab-content2
      if (!originalTabContent) {
        originalTabContent = tabContentElement.innerHTML;
      }
      
      // Create a new div element
      const newDiv = document.createElement('div');
      newDiv.className = 'new-content-div'; // Add any classes you want
      newDiv.innerHTML = `
        <div class="h-full flex flex-col justify-start">
          <button type="button" id="back" class="text-2xl inline-flex items-center mb-6">
            <i class="fa-solid fa-arrow-left-long mr-2"></i>
            回前頁
          </button>
          <div class="grid grid-cols-12 gap-6">
            <!-- Left -->
            <div class="col-span-8 p-8 mb-12 rounded-2xl bg-blue-50">
              <!-- Header -->
              <div class="flex justify-between pb-4 mb-4 text-2xl border-b-4 border-gray-300">
                <p class="text-gray-500">請填寫個案基本資訊</p>
                <label for="quantity" class="text-gray-700">案號:18</label>
              </div>
              <!-- Fields -->
              <div class="flex flex-col gap-6 text-2xl text-gray-500">
                <!-- Name -->
                <div class="flex items-center gap-8">
                  <label for="input-label" class="font-medium whitespace-nowrap">姓名</label>
                  <p>陳小美</p>
                </div>
                <!-- Age -->
                <div class="flex items-center gap-8">
                  <label for="input-label" class="block mb-2 font-medium whitespace-nowrap">年齡</label>
                  <p>87</p>
                </div>
                <!-- Gender -->
                <div class="flex items-center gap-8">
                  <label for="input-label" class="block mb-2 font-medium whitespace-nowrap">性別</label>
                  <p>女</p>
                </div>
                <!-- Education -->
                <div class="flex items-center gap-8">
                  <label for="input-label" class="block mb-2 font-medium whitespace-nowrap">教育</label>
                  <p>未受教育</p>
                </div>
              </div>
            </div>
            <!-- Right -->
            <div class="col-span-4 p-8 mb-12 rounded-2xl bg-blue-50">
              <!-- Header -->
              <div class="pb-4 text-2xl border-b-4 border-gray-300">
                <p class="text-center text-gray-500 ">篩檢紀錄</p>
              </div>
              <!-- Fields -->
              <div class="flex flex-col overflow-y-scroll text-2xl text-left text-gray-500 h-96">
                <!-- 個案 -->
            <a href="篩檢紀錄.html" class="px-2 py-4 border-b-2 border-gray-300 border-dashed rounded-lg hover:bg-amber-300 active:bg-amber-300">
              <div class="flex items-center justify-between mb-4 ">
                <label for="input-label" class="font-medium text-gray-900 whitespace-nowrap ">
                  陳小美
                </label>
                <p class="text-blue-600 ">
                  17 分
                </p>
              </div>
              <p class="text-lg">
                測驗時間：
                <time datetime="2024-07-02 T17:25">2024/07/02 17:25
                </time>
              </p>
              <p class="text-lg">
                花費時間：
                <time>04:49:12</time>
              </p>
            </a>
            <a href="篩檢紀錄.html" class="px-2 py-4 border-b-2 border-gray-300 border-dashed rounded-lg hover:bg-amber-300 active:bg-amber-300">
              <div class="flex items-center justify-between mb-4 ">
                <label for="input-label" class="font-medium text-gray-900 whitespace-nowrap ">
                  陳小美
                </label>
                <p class="text-blue-600 ">
                  17 分
                </p>
              </div>
              <p class="text-lg">
                測驗時間：
                <time datetime="2024-07-02 T17:25">2024/07/02 17:25
                </time>
              </p>
              <p class="text-lg">
                花費時間：
                <time>04:49:12</time>
              </p>
            </a>
            <a href="篩檢紀錄.html" class="px-2 py-4 border-b-2 border-gray-300 border-dashed rounded-lg hover:bg-amber-300 active:bg-amber-300">
              <div class="flex items-center justify-between mb-4 ">
                <label for="input-label" class="font-medium text-gray-900 whitespace-nowrap ">
                  陳小美
                </label>
                <p class="text-blue-600 ">
                  17 分
                </p>
              </div>
              <p class="text-lg">
                測驗時間：
                <time datetime="2024-07-02 T17:25">2024/07/02 17:25
                </time>
              </p>
              <p class="text-lg">
                花費時間：
                <time>04:49:12</time>
              </p>
            </a>
            <a href="篩檢紀錄.html" class="px-2 py-4 border-b-2 border-gray-300 border-dashed rounded-lg hover:bg-amber-300 active:bg-amber-300">
              <div class="flex items-center justify-between mb-4 ">
                <label for="input-label" class="font-medium text-gray-900 whitespace-nowrap ">
                  陳小美
                </label>
                <p class="text-blue-600 ">
                  17 分
                </p>
              </div>
              <p class="text-lg">
                測驗時間：
                <time datetime="2024-07-02 T17:25">2024/07/02 17:25
                </time>
              </p>
              <p class="text-lg">
                花費時間：
                <time>04:49:12</time>
              </p>
            </a>
              </div>
            </div>
          </div>
          <!-- Buttons -->
          <div class="flex justify-center gap-6">
            <button id="edit" onclick="edit()" class="px-12 py-5 text-3xl font-bold text-gray-500 bg-white rounded-full ring-gray-300 ring-4 w-fit">
              編輯個案資訊
            </button>
            <a href="個案測前觀察.html" class="px-12 py-5 text-3xl font-bold text-gray-900 rounded-full bg-amber-300 w-fit">
              下一步
            </a>
          </div>
        </div>
      `;
      
      // Replace the existing content with the new div
      tabContentElement.innerHTML = ''; // Clear the existing content
      tabContentElement.appendChild(newDiv); // Append the new div
      
      // Event listener for the back button to revert to the original content
      document.getElementById('back').addEventListener('click', function() {
        tabContentElement.innerHTML = originalTabContent; // Revert to original content
        originalTabContent = null; // Reset originalTabContent
        
        // Reattach event listeners to change-content-button buttons
        addEventListenersToButtons();
      });
    });
  });
}

// Initially add event listeners to change-content-button buttons
addEventListenersToButtons();

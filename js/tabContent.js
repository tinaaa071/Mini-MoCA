document.querySelector('.change-content-button').addEventListener('click', function() {
    // Get the content element within basic-tabs-2
    const tabContentElement = document.getElementById('tab-content2');
    
    // Create a new div element
    const newDiv = document.createElement('div');
    newDiv.className = 'new-content-div'; // Add any classes you want
    newDiv.innerHTML = `
    <div>
    <div class="grid grid-cols-12 gap-6">
      <!-- 左 -->
      <div class="col-span-8 p-8 mb-12 rounded-2xl bg-blue-50">
        <!-- 表頭 -->
        <div class="flex justify-between pb-4 mb-4 text-2xl border-b-4 border-gray-300">
          <p class="text-gray-500">請填寫個案基本資訊</p>
          <label for="quantity" class="text-gray-700">案號:18</label>
        </div>
        <!-- 欄位 -->
        <div class="flex flex-col gap-6 text-2xl text-gray-500">
          <!-- 姓名 -->
          <div class="flex items-center gap-8">
            <label for="input-label" class="font-medium whitespace-nowrap">姓名</label>
            <p>陳小美</p>
          </div>
          <!-- 年齡 -->
          <div class="flex items-center gap-8">
            <label for="input-label" class="block mb-2 font-medium whitespace-nowrap">年齡</label>
            <p>87</p>
          </div>
          <!-- 性別 -->
          <div class="flex items-center gap-8">
            <label for="input-label" class="block mb-2 font-medium whitespace-nowrap">性別</label>
            <p>女</p>
          </div>
          <!-- 教育 -->
          <div class="flex items-center gap-8">
            <label for="input-label" class="block mb-2 font-medium whitespace-nowrap">教育</label>
            <p>未受教育</p>
          </div>
        </div>
      </div>
      <!-- 右 -->
      <div class="col-span-4 p-8 mb-12 rounded-2xl bg-blue-50">
        <!-- 表頭 -->
        <div class="pb-4 mb-4 text-2xl border-b-4 border-gray-300">
          <p class="text-center text-gray-500 ">篩檢紀錄</p>
        </div>
        <!-- 欄位 -->
        <div class="flex flex-col gap-6 text-2xl text-gray-500">
          <!-- 姓名 -->
          <div class="flex items-center gap-8">
            <label for="input-label" class="font-medium whitespace-nowrap">姓名</label>
            <p>陳小美</p>
          </div>
          <!-- 年齡 -->
          <div class="flex items-center gap-8">
            <label for="input-label" class="block mb-2 font-medium whitespace-nowrap">年齡</label>
            <p>87</p>
          </div>
          <!-- 性別 -->
          <div class="flex items-center gap-8">
            <label for="input-label" class="block mb-2 font-medium whitespace-nowrap">性別</label>
            <p>女</p>
          </div>
          <!-- 教育 -->
          <div class="flex items-center gap-8">
            <label for="input-label" class="block mb-2 font-medium whitespace-nowrap">教育</label>
            <p>未受教育</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 按鈕 -->
    <div class="flex justify-center gap-6">
      <button  class="px-12 py-5 text-3xl font-bold text-gray-600 bg-white border border-gray-600 rounded-full w-fit">
        編輯個案資訊
      </button>
      <a href="測前設定.html" class="px-12 py-5 text-3xl font-bold text-gray-900 rounded-full bg-amber-300 w-fit">
        下一步
      </a>
  </div>
  </div>
    `;
    
    // Replace the existing content with the new div
    tabContentElement.innerHTML = ''; // Clear the existing content
    tabContentElement.appendChild(newDiv); // Append the new div
  });
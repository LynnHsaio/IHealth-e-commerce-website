# IHealth | Supplement Ecommerce

<img src="./src/assets/readmeImgs/main.gif">

IHealth 是一個販售保健食品的購物網站，使用 react 框架，發佈在 firebase 上

demo 網址: https://e-commerce-fea9f.web.app/

```
會員測試帳號
email: test@test.com
密碼：123456

信用卡測試號碼 : 4242 4242 4242 4242
```

<br/>

## 使用技術

<table>
  <thead>
    <tr>
      <th>技術</th>
      <th>功能</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>hooks</th>
      <td>使程式碼更簡短、易於理解和在組件間更有重複使用性</td>
    </tr>
    <tr>
      <th>context</th>
      <td>可以將資料傳到直接傳送到需要的元件，不用經過中間層層傳遞</td>
    </tr>
    <tr>
      <th>reducer</th>
      <td>使程式碼更整齊，把所有功能結合成一個函式，使邏輯集中化</td>
    </tr>
    <tr>
      <th>localstorage</th>
      <td>將網頁中的資料儲存在使用者的瀏覽器當中，購物車紀錄得以被永久保存</td>
    </tr>
    <tr>
      <th>react router dom</th>
      <td> 實做單頁面應用程式(SPA)，讓使用者始終在同一個頁面，根據輸入的網址來呈現不同的網頁內容，網站不會重整，因此內容的切換更快速、更順暢，帶來更好的使用者體驗</td>
    </tr>
    <tr>
      <th>firebase</th>
      <td>使用 firebase deploy發佈, firestore資料庫, authentication會員系統, stripe extension金流</td>
    </tr>
     <tr>
      <th>localstorage</th>
      <td>將網頁中的資料儲存在使用者的瀏覽器當中，購物車紀錄得以被永久保存</td>
    </tr>
    <tr>
      <th>RWD響應式網頁</th>
      <td>能因應不同裝置螢幕大小而自動調整網頁圖文內容和排版，給使用者最佳瀏覽畫面</td>
    </tr>
    <tr>
      <th>styled component</th>
      <td>CSS-In-JS 的函式庫，可以在 JSX 中撰寫 CSS code</td>
    </tr>
  </tbody>
</table>

<br/>

## 網頁功能

### 商品分類、搜尋、篩選功能

- 依價格高低排列、分類商品的選項。
- 搜尋欄可輸入文字找到相關商品。
- 多種篩選選擇，每個選項不是寫死在 html 裡，而是用 new Set 搜集商品資料不重複的值產生的動態選項。

```
const getUniqueVals = (array, property) => {
  const uniqueValues = new Set(array.map((item) => item[property]).flat());
  return ["全部", ...Array.from(uniqueValues)];
};
```

<img src="./src/assets/readmeImgs/filters.gif">

<br>

### 購物車

可以在購物車裡調整商品數量，數量調整範圍在 1 至庫存數量之間，也可以刪除整項商品，或是清空整個購物車。
<img src="./src/assets/readmeImgs/cart.gif">

<br>

### 會員

使用 firebase Authentication 做出會員系統，有註冊和登入功能，登入後會在右上角顯示使用者名稱，及擁有購買功能。
<img src="./src/assets/readmeImgs/authentication.gif">

<br>

### 金流

使用 firebase stripe extension，左側顯示購買的商品清單，右側可輸入購買人資料。
<img src="./src/assets/readmeImgs/stripe.gif">

<br>

### RWD 響應式網頁

<img src="./src/assets/readmeImgs/rwd.gif">

# persianValidator
# روش های نصب
نصب با npm
```bash
npm i persian_data_validator
```
نحواه نصب با CDN
```html
<script src="https://cdn.jsdelivr.net/gh/rouhollahasadi/persianValidator/persianValidate.js"></script>
```
نحوه استفاده دانلودی:
فایل با نام persianValidate.js دانلود و در پروژه خود بصورت زیر  قرار دهید 
```html
<script src="persianValidate.js"></script>
```
# روش استفاده
طریقه وارد کردن ماژولها از طریق import :
```javascript
import { module_name} from "persian_data_validator";
```
مثال» وارد کردن تابع validImageextention که وظیفه بررسی کردن پسوند تصاویر دارد درصورتیکه پسوند تصاویر png یا jpg باشد true برمیگرداند در غیراینصورت false برمیگرداند.
```javascript
import { validImageextention} from "persian_data_validator";
console.log(validImageextention('a.png'));//true
console.log(validImageextention('a.svg'));//false
```
طریق استفاده بصورت CDN یا دانلودی

```html
<script src="https://cdn.jsdelivr.net/gh/rouhollahasadi/persianValidator/persianValidate.js"></script>
or
<script src="persianValidate.js"></script>
```
```javascript
console.log(validImageextention('a.png'));//true
console.log(validImageextention('a.svg'));//false
```
#ویژگی های
این کتابخانه شامل توابع زیر می باشد:
1-تابع validateArray
تابع یک پارامتر به نام array دریافت می‌کند که می‌تواند هر نوع داده‌ای باشد (آرایه، عدد، رشته، آبجکت و غیره).
با استفاده از متد Array.isArray(array) بررسی می‌کند که آیا مقدار ورودی یک آرایه (Array) است یا خیر.


مثال‌های استفاده از تابع
```javascript
console.log(validateArray([1, 2, 3])); // خروجی: true
console.log(validateArray("Hello"));    // خروجی: false
console.log(validateArray({ a: 1 }));   // خروجی: false
console.log(validateArray(123));        // خروجی: false
console.log(validateArray([]));         // خروجی: true
```
2- تابع validateEmail
تابع یک مقدار ورودی به نام email دریافت می‌کند که یک رشته (string) است و می‌تواند شامل هر مقدار متنی باشد.
ررسی می‌کند که مقدار ورودی فرمت یک آدرس ایمیل معتبر را داشته باشد.
```javascript
console.log(validateEmail("test@example.com"));  // خروجی: true
console.log(validateEmail("user@domain.co"));    // خروجی: true
console.log(validateEmail("invalid-email"));     // خروجی: false
console.log(validateEmail("user@domain"));       // خروجی: false
console.log(validateEmail("user@.com"));         // خروجی: false
console.log(validateEmail("user@domain.c"));     // خروجی: false (چون TLD حداقل ۲ کاراکتر نیاز دارد)

```

3- تابع validImageextention
تابع یک مقدار ورودی به نام file_name دریافت می‌کند که یک رشته (string) است و نمایانگر نام یک فایل می‌باشد (مثلاً "image.png" یا "photo.jpg").
اگر پسوند استخراج‌شده در آرایه validextentions موجود باشد، مقدار true برمی‌گرداند.
در غیر این صورت، مقدار false برمی‌گرداند.

```javascript
console.log(validImageextention("photo.jpg"));       // خروجی: true
console.log(validImageextention("picture.PNG"));     // خروجی: true (چون `.toLowerCase()` اعمال شده است)
console.log(validImageextention("document.pdf"));    // خروجی: false (چون `pdf` در لیست پسوندهای مجاز نیست)
console.log(validImageextention("archive.zip"));     // خروجی: false
console.log(validImageextention("no_extension"));    // خروجی: false (چون هیچ پسوندی وجود ندارد)
console.log(validImageextention("multi.part.name.jpeg"));  // خروجی: false (چون `jpeg` در لیست نیست)
```
4- تابع validateFunc
تابع یک مقدار ورودی به نام func دریافت می‌کند که می‌تواند هر نوع داده‌ای باشد (عدد، رشته، آرایه، تابع، شیء و غیره).
 بررسی می‌کند که نوع (type) مقدار ورودی برابر با "function" است یا خیر.
```javascript
console.log(validateFunc(function() {}));   // خروجی: true (یک تابع معمولی)
console.log(validateFunc(() => {}));       // خروجی: true (یک تابع فلش)
console.log(validateFunc(Math.max));       // خروجی: true (یک تابع داخلی جاوااسکریپت)
console.log(validateFunc(123));            // خروجی: false (عدد است)
console.log(validateFunc("hello"));        // خروجی: false (رشته است)
console.log(validateFunc([1, 2, 3]));      // خروجی: false (آرایه است)
console.log(validateFunc({}));             // خروجی: false (شیء است)
console.log(validateFunc(null));           // خروجی: false (مقدار `null` است)
console.log(validateFunc(undefined));      // خروجی: false (مقدار `undefined` است)

```
5- تابع validatePhone
تابع مقدار mobile را دریافت می‌کند که یک رشته (string) یا عدد (number) است و قرار است بررسی کند که آیا این مقدار یک شماره موبایل معتبر است یا نه.
```javascript
console.log(validatePhone("09121234567")); // خروجی: true (شماره معتبر)
console.log(validatePhone("09221234567")); // خروجی: true (شماره معتبر)
console.log(validatePhone("09991234567")); // خروجی: false (اپراتور نامعتبر)
console.log(validatePhone("08121234567")); // خروجی: false (شروع با 09 نیست)
console.log(validatePhone("09121234"));    // خروجی: false (کمتر از 11 رقم دارد)
console.log(validatePhone("091212345678")); // خروجی: false (بیشتر از 11 رقم دارد)
console.log(validatePhone("091a1234567")); // خروجی: false (حروف دارد)
console.log(validatePhone(9121234567));    // خروجی: false (بدون 09 در ابتدا)

```
6- تابع validateNationalcode
تابع یک مقدار به نام code دریافت می‌کند که باید یک کد ملی ۱۰ رقمی ایران باشد.


```javascript
console.log(validateNationalcode("1234567891")); // خروجی: false (نامعتبر)
console.log(validateNationalcode("0012312344")); // خروجی: true (معتبر)
console.log(validateNationalcode("0123456789")); // خروجی: false (نامعتبر)
console.log(validateNationalcode("123456"));     // خروجی: false (کمتر از ۱۰ رقم)
console.log(validateNationalcode("abcdefghij")); // خروجی: false (حروف نامعتبر)
console.log(validateNationalcode("1111111111")); // خروجی: false (همه ارقام یکسان)
```
7- تابع validateObject
تابع یک مقدار به نام obj دریافت می‌کند و بررسی می‌کند که آیا یک آبجکت معتبر است یا نه.



```javascript
console.log(validateObject({}));            // خروجی: true (آبجکت خالی)
console.log(validateObject({ key: "value" })); // خروجی: true (آبجکت با مقدار)
console.log(validateObject(null));          // خروجی: false (null معتبر نیست)
console.log(validateObject([]));            // خروجی: true (چون آرایه هم نوعی آبجکت است)
console.log(validateObject("hello"));       // خروجی: false (رشته است)
console.log(validateObject(123));           // خروجی: false (عدد است)
console.log(validateObject(undefined));     // خروجی: false (تعریف‌نشده است)
console.log(validateObject(function() {})); // خروجی: false (تابع است)

```
8- تابع validatePasswordRe
این تابع یک مقدار ورودی به نام password دریافت می‌کند که باید یک رشته (string) باشد.


```javascript
console.log(validatePasswordRe("Abc1!"));     // true ✅ (همه شرایط برقرار است)
console.log(validatePasswordRe("abc1!"));     // false ❌ (حرف بزرگ ندارد)
console.log(validatePasswordRe("ABC1!"));     // false ❌ (حرف کوچک ندارد)
console.log(validatePasswordRe("Abcd!"));     // false ❌ (عدد ندارد)
console.log(validatePasswordRe("Abc1"));      // false ❌ (نماد خاص ندارد)
console.log(validatePasswordRe("A1!"));       // false ❌ (کمتر از ۴ کاراکتر است)

```
9- تابع persianName
این تابع یک مقدار به نام full_name دریافت می‌کند که باید یک رشته (string) باشد.


```javascript
console.log(persianName("محمد رضا"));   // true ✅
console.log(persianName("زهرا.فاطمی"));  // true ✅
console.log(persianName("علی-اکبر"));    // true ✅
console.log(persianName("سارا123"));     // false ❌ (شامل عدد است)
console.log(persianName("Reza Ahmadi")); // false ❌ (شامل حروف انگلیسی است)
console.log(persianName("احمد@!#"));     // false ❌ (شامل کاراکترهای غیرمجاز است)

```
10- تابع validatePostalCode
این تابع یک ورودی به نام $postalCode دریافت می‌کند که باید یک رشته (string) باشد.


```javascript
console.log(validatePostalCode("1234567890")); // true ✅
console.log(validatePostalCode("9876543210")); // true ✅
console.log(validatePostalCode("12345"));      // false ❌ (کمتر از ۱۰ رقم)
console.log(validatePostalCode("abc1234567")); // false ❌ (شامل کاراکتر غیر عددی)
console.log(validatePostalCode("123456789012"));// false ❌ (بیش از ۱۰ رقم)
```
11- تابع validateJalali
این تابع یک ورودی به نام inputDate دریافت می‌کند که باید یک رشته (string) باشد و به صورت تاریخ شمسی به فرمت "yyyy/mm/dd" (یعنی سال/ماه/روز) ارائه شود.

```javascript
console.log(validateJalali("1400/05/20")); // true ✅
console.log(validateJalali("1401/12/32")); // false ❌ (روز بیشتر از 31)
console.log(validateJalali("1400/13/20")); // false ❌ (ماه بیشتر از 12)
console.log(validateJalali("100/05/20"));  // false ❌ (سال کمتر از 1000)
console.log(validateJalali("1400/06/31")); // false ❌ (ماه 6 باید 30 روز باشد)
console.log(validateJalali("1401/02/15")); // true ✅
```






































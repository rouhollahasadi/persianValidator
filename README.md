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
| توضیحات                                                                   | تابع                |
| ------------------------------------------------------------------------- | ------------------- |
| این تابع پسوند تصاویر را بررسی میکند و اگر jpg یا png باشد مجاز خواهد بود | validImageextention |

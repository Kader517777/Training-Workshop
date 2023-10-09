<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Write your explanation here</i>
greetign ভেরিয়েবল এখানে ভেরিয়েবল ডিক্লিয়ার করার নিয়ম অনুযায়ী ডিক্লিয়ার করা হয় নি।
এখানে let দিয়ে যেই ভেরি ডিক্লিয়ার করা হয়েছে সেটি পরবর্তি ব্যবহার না করে ভুল ভেরিয়েবল ব্যবহার করা হয়েছে। আর অবজেক্টে কোন প্রোপার্টি দেওয়া হয় তাই greetign এর মান undefined
</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C.

<i>Write your explanation here</i>
এখানে নাম্বার টাইপ sum() এ একটি নাম্বার এবং একটি স্ট্রিং টাইপ ডাটা পাঠানো হয়েছে ফলে স্ট্রিং এর সাথে নাম্বার যোগ করা হলে আউটপুর স্ট্রিং আসে।
</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>Write your explanation here</i>
এখানে food array এর মান একই থকবে মানে কোনো পরিবর্তন হয় নায়। info object এ প্রোপার্টি এর ভ্যালু food array এর ০ ইনডেক্স এসাইন করা হয়েছে।  ফলে food array এর মান একই থাকল।
</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>Write your explanation here</i>
এখানে sayHi() এর মাধ্যমে name parameter pass করা হয়েছে।  কিন্তু ফাংশন কল দেওয়ার  sayHi() এ কোন প্যারামিটার পাস করা হয় নাই। তাই name এর মান undefined আসবে।
</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Write your explanation here</i>
0 == false সত্য।  অর্থাত্ nums অ্যারে এর ০ ইনডেক্স ০ হওয়ায় প্রথমবার কন্ডিশনে মিথ্যা হয় ফলে চারটা ইনডেক্স থাকলে count এর মান ৩।
</p>
</details>

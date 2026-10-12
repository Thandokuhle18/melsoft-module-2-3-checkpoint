// Challenge 1
{
    // Data type: string. const because my name won't change.
    const fullName = "Thandokuhle Maphanga";

    // Data type: number. let because my age changes every year.
    let age = 22;

    // Data type: boolean. let because my opinion might change as I learn more.
    let isEnjoyingJS = true;

    // Data type: number (decimal). const because this is a fixed preference.
    const favTemp = 7.2;

    // Data type: number (NaN). const because it's intentionally NaN and never changes.
    const invalidNum = Number("not a number");

    // Data type: number (Infinity). const because value is always Infinity.
    const infiniteValue = 1 / 0;

    // Data type: number. const because this  value is fixed.
    const maximumSafeInteger = Number.MAX_SAFE_INTEGER;

    // Data type: null. const because it's deliberately empty and stays that way.
    const favMovie = null;

    // Data type: undefined. const because it's deliberately set to undefined.
    const favCartoon = undefined;

    // Data type: string (template literal).
    const summary = `${fullName} is ${age} years old and likes ${favTemp}°C.`;
    console.log(summary);

    console.log(typeof fullName);
    console.log(typeof age);
    console.log(typeof isEnjoyingJS);
    console.log(typeof favTemp);
    console.log(typeof invalidNum);
    console.log(typeof infiniteValue);
    console.log(typeof maximumSafeInteger);
    console.log(typeof favMovie);
    console.log(typeof favCartoon);
    console.log(typeof summary);
    console.log(typeof null);
    console.log(typeof NaN);
    console.log(typeof "42");
    console.log(typeof (typeof 42));
    console.log(typeof [1, 2, 3]);
    console.log(typeof function () {});
}


// Challenge 2
{

}


// Challenge 3
{
    //1. Arithmetic
    const netSalary = 45000 - (45000 * 25 / 100) - (45000 * 1 / 100) - 2500;
    console.log(netSalary);

    //2. Assignment
    const itemsTotal = 150 + 85 + 220;
    const shoppingCartTotal = itemsTotal - (itemsTotal * 10 / 100) + (itemsTotal * 15 / 100);
    console.log(shoppingCartTotal);

    //3. Validate sign up form
    const age = 25;
    const password = "abcXYZ";
    const email = "abc@gmail.com";
    const confirmEmail = "abc@gmail.com";

    const isAdult = age >= 18;                      // at least 18
    const isMinor = age < 18;
    const isLongEnough = password.length >= 8;      // at least 8 characters
    const emailsMatch = email === confirmEmail;
    const emailsDiffer = email !== confirmEmail;

    console.log("Adult:", isAdult);
    console.log("Minor:", isMinor);
    console.log("Password long enough:", isLongEnough);
    console.log("Emails match:", emailsMatch);
    console.log("Emails differ:", emailsDiffer);

    //4. Logical
    const isLoggedIn = true;
    const isEmailVerified = false;
    const isAdmin = true;

    if ((isLoggedIn && isEmailVerified) || isAdmin) {
        console.log("Access granted");
    } else {
        console.log("Access denied");
    }

    // 5. Unary
    // Converts the age typed into a form field (a string) into a number
    // using unary +, then toggles a dark mode flag using !.
    const ageInput = "25";
    const ageNumber = +ageInput;
    console.log(ageNumber, typeof ageNumber);

    let isDarkMode = false;
    isDarkMode = !isDarkMode;
    console.log("Dark mode:", isDarkMode); // true
    isDarkMode = !isDarkMode;
    console.log("Dark mode:", isDarkMode); // false

    // 6. Ternary / Conditional
    const membershipType = "trial";

    const simpleBadge = membershipType === "premium" ? "Premium Member" : "Free Member";
    console.log(simpleBadge);

    const fullBadge =
        membershipType === "premium" ? "Premium Member" :
        membershipType === "trial" ? "Trial Member" :
        "Free Member";
    console.log(fullBadge);

    //7. String concatenation
    const firstName = "Ndoni";
    const lastName = "Jiyane";
    const userAge = 3;

    const greetingConcat = "Welcome back " + firstName + " " + lastName + ", you are " + userAge + " years old.";
    console.log(greetingConcat);

    const greetingTemplate = `Welcome back ${firstName} ${lastName}, you are ${userAge} years old.`;
    console.log(greetingTemplate);
}


// Challenge 4
{
    console.log("1.", 0 == false);
    console.log("2.", 0 === false);
    console.log("3.", "" == 0);
    console.log("4.", "" === 0);
    console.log("5.", "0" == 0);
    console.log("6.", "0" === 0);
    console.log("7.", null == undefined);
    console.log("8.", null === undefined);
    console.log("9.", null == 0);
    console.log("10.", null >= 0);
    console.log("11.", null > 0);
    console.log("12.", NaN == NaN);
    console.log("13.", NaN === NaN);
    console.log("14.", Object.is(NaN, NaN));
    console.log("15.", +0 === -0);
    console.log("16.", Object.is(+0, -0));
    console.log("17.", [1, 2, 3] == "1,2,3");
    console.log("18.", [] == false);
    console.log("19.", [] == 0);
    console.log("20.", [0] == false);

    const newPassword1 = "SecurePass123";
    const confirmPassword1 = "SecurePass123";
    const currentEmail1 = "user@example.com";
    const confirmEmail1 = "user@example.com";

    console.log("Test Case 1");
    console.log("Passwords match:", newPassword1 === confirmPassword1 ? "PASS" : "FAIL");
    console.log("Emails match:", currentEmail1 === confirmEmail1 ? "PASS" : "FAIL");
    console.log("Password is not email:", newPassword1 !== currentEmail1 ? "PASS" : "FAIL");
    console.log("Password has at least 8 characters:", newPassword1.length >= 8 ? "PASS" : "FAIL");

    const newPassword2 = "user@example.com";
    const confirmPassword2 = "different";
    const currentEmail2 = "user@example.com";
    const confirmEmail2 = "other@example.com";

    console.log("Test Case 2");
    console.log("Passwords match:", newPassword2 === confirmPassword2 ? "PASS" : "FAIL");
    console.log("Emails match:", currentEmail2 === confirmEmail2 ? "PASS" : "FAIL");
    console.log("Password is not email:", newPassword2 !== currentEmail2 ? "PASS" : "FAIL");
    console.log("Password has at least 8 characters:", newPassword2.length >= 8 ? "PASS" : "FAIL");
}


// Challenge 5
{
    console.log(typeof 42);
    console.log(typeof "hello");
    console.log(typeof true);
    console.log(typeof undefined);
    console.log(typeof null);
    console.log(typeof {});
    console.log(typeof []);
    console.log(typeof function() {});
    console.log(typeof NaN);
    console.log(typeof undeclaredVariable);

    const value = [];
    console.log(Array.isArray(value));

    console.log([] instanceof Array);
    console.log([] instanceof Object);
    console.log({} instanceof Object);
    console.log("hello" instanceof String);
    console.log(new String("hello") instanceof String);
    console.log(42 instanceof Number);
    console.log(new Date() instanceof Date);
    console.log(/abc/ instanceof RegExp);

    const user = {
        name: "Lerato",
        age: 25,
        role: "student"
    };

    console.log(user);
    delete user.role;
    console.log(user);

    let x = 5;
    console.log(delete x);

    const arr = [1, 2, 3, 4];
    console.log(arr);
    delete arr[1];
    console.log(arr);
    console.log(arr.length);
    console.log(arr[1]);

    console.log(delete Math.PI);
    console.log(Math.PI);
}


// Challenge 6
{
    const expre1 = 2 + 3 * 4 - 1;
    // 3* 4 = 12 -> 2 + 12 = 14 -> 14 - 1 = 13
    console.log(expre1);

    const expre2 = (2 + 3) * (4 - 1);
    // 2+ 3 = 5 * (4-1 = 3) -> 5 * 3 = 15
    console.log(expre2);

    const expre3 = 10 - 4 - 2;
    // - is left to right: 10 - 4 = 6 -> 6 - 2 = 4
    console.log(expre3);

    const expre4 = 2 ** 3 ** 2;
    // ** is right to left: 3 ** 2 = 9 -> 2 ** 9 = 512
    console.log(expre4);

    const expre5 = 10 % 3 * 2 + 1;
    // %, * and / share the same level, so left to right:
    // 10 % 3 = 1 -> 1 * 2 = 2 -> 2 + 1 = 3
    console.log(expre5);

    const expre6 = 100 / 4 / 5;
    // left to right: 100 / 4 = 25 -> 25 / 5 = 5
    console.log(expre6);

    const expre7 = 5 + 2 > 6 && 3 < 4;
    // order: arithmetic, then comparison, then &&
    // 5 + 2 = 7 -> 7 > 6 = true -> 3 < 4 = true -> true && true = true
    console.log(expre7);

    const expre8 = true && false || true && true;
    // && fires before ||
    // true && false = false -> true && true = true -> false || true = true
    console.log(expre8);

    const expre9 = !false && !!0;
    // ! fires first, then &&
    // !false = true -> !0 = true -> !true = false -> true && false = false
    console.log(expre9);

    const expre10 = 5 > 3 && 10 < 20 || !(2 === "2");
    // brackets first: 2 === "2" = false -> !false = true
    // 5 > 3 = true -> 10 < 20 = true -> true && true = true
    // true || true = true
    console.log(expre10);

    const expre11 = 1000 * 1.15 * 0.9;
    // left to right: 1000 * 1.15 = 1150 -> 1150 * 0.9 = 1035
    // (floating point can add tiny errors, so check what your console prints)
    console.log(expre11);

    const expre12 = typeof 5 + 1;
    // typeof fires before +
    // typeof 5 = "number" -> "number" + 1 = "number1"
    console.log(expre12);

    const expre13 = typeof (5 + 1);
    // brackets first: 5 + 1 = 6 -> typeof 6 = "number"
    console.log(expre13);

    const expre14 = "5" + 3 * 2;
    // * fires before +
    // 3 * 2 = 6 -> "5" + 6 = "56" (+ with a string joins text)
    console.log(expre14);

    const expre15 = "5" - 3 + 2;
    // left to right
    // "5" - 3 = 2 (- always does maths, so "5" becomes 5) -> 2 + 2 = 4
    console.log(expre15);
}


// Challenge 7
{
    const percentages = [95, 82, 73, 65, 54, 42, 0, 100];

    percentages.forEach((percentage) => {
        const grade =
            percentage >= 90 ? "A" :
            percentage >= 80 ? "B" :
            percentage >= 70 ? "C" :
            percentage >= 60 ? "D" :
            percentage >= 50 ? "E" :
            "F";

        console.log(percentage, "=>", grade);
    });

    const userProfile1 = {};

    const displayName1 = userProfile1.displayName || "Guest User";
    const theme1 = userProfile1.theme || "light";
    const maxResults1 = userProfile1.maxResults || 10;
    const lastLogin1 = userProfile1.lastLogin ?? "Never";
    const notificationCount1 = userProfile1.notificationCount ?? 0;

    console.log(displayName1);
    console.log(theme1);
    console.log(maxResults1);
    console.log(lastLogin1);
    console.log(notificationCount1);

    const userProfile2 = {
        displayName: "Thabo",
        theme: "",
        maxResults: 25,
        lastLogin: null,
        notificationCount: 0
    };

    const displayName2 = userProfile2.displayName || "Guest User";
    const theme2 = userProfile2.theme || "light";
    const maxResults2 = userProfile2.maxResults || 10;
    const lastLogin2 = userProfile2.lastLogin ?? "Never";
    const notificationCount2 = userProfile2.notificationCount ?? 0;

    console.log(displayName2);
    console.log(theme2);
    console.log(maxResults2);
    console.log(lastLogin2);
    console.log(notificationCount2);

    const user1 = {
        name: "Thabo",
        address: {
            city: "Johannesburg"
        }
    };

    const user2 = {
        name: "Lerato"
    };

    const user3 = null;

    console.log(user1 && user1.address && user1.address.city);
    console.log(user2 && user2.address && user2.address.city);
    console.log(user3 && user3.address && user3.address.city);

    console.log(user1?.address?.city);
    console.log(user2?.address?.city);
    console.log(user3?.address?.city);

    console.log(user1?.address?.city ?? "Unknown city");
    console.log(user2?.address?.city ?? "Unknown city");
    console.log(user3?.address?.city ?? "Unknown city");

    console.log(null || undefined || 0 || "" || "finally");
    console.log(null ?? undefined ?? 0 ?? "" ?? "finally");
    console.log(0 || "first truthy");
    console.log(0 ?? "first non-nullish");
    console.log(true && false && "never reached");
    console.log("first" && "second" && "third");
    console.log(false || (true && "yes"));
    console.log((false || true) && "yes");
    console.log(1 && 2 && 3);
    console.log(null?.foo?.bar?.baz);
}


// Challenge 8
{

}


// Challenge 9
{
    const P = 25000;
    const r = 0.075;
    const n = 12;
    const t = 3;

    // P * (1 + r/n) ^ (n*t)
    // r/n = 0.00625 -> 1 + 0.00625 = 1.00625
    // n*t = 36 -> 1.00625 ** 36 -> * 25000
    const finalBalance = P * (1 + r / n) ** (n * t);

    // total interest = final balance - initial deposit
    const interestEarned = finalBalance - P;

    // effective annual rate: (final / P) ** (1/t) gives growth per year
    // minus 1 leaves only the growth -> * 100 makes it a percentage
    const effectiveRate = ((finalBalance / P) ** (1 / t) - 1) * 100;

    // toFixed(2) gives 2 decimals, replace() adds a comma every 3 digits
    console.log("Final balance: R" + finalBalance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    console.log("Interest earned: R" + interestEarned.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    console.log("Effective annual rate: " + effectiveRate.toFixed(2) + "%");

    // under 1000 -> 25, else under 5000 -> 50, else under 25000 -> 75, else 0
    const balance1 = 500;
    const balance2 = 1500;
    const balance3 = 10000;
    const balance4 = 50000;

    const fee1 = balance1 < 1000 ? 25 : balance1 < 5000 ? 50 : balance1 < 25000 ? 75 : 0;
    const fee2 = balance2 < 1000 ? 25 : balance2 < 5000 ? 50 : balance2 < 25000 ? 75 : 0;
    const fee3 = balance3 < 1000 ? 25 : balance3 < 5000 ? 50 : balance3 < 25000 ? 75 : 0;
    const fee4 = balance4 < 1000 ? 25 : balance4 < 5000 ? 50 : balance4 < 25000 ? 75 : 0;

    // annual fee = monthly fee * 12
    console.log("R500: monthly R" + fee1 + ", annual R" + fee1 * 12);
    console.log("R1,500: monthly R" + fee2 + ", annual R" + fee2 * 12);
    console.log("R10,000: monthly R" + fee3 + ", annual R" + fee3 * 12);
    console.log("R50,000: monthly R" + fee4 + ", annual R" + fee4 * 12);

    const sendAmount = 15750.33;
    const exchangeRate = 18.42;

    // commission = 15750.33 * 2.5% = 393.75825
    const commission = sendAmount * 0.025;

    // amount after commission = 15750.33 - 393.75825
    const afterCommission = sendAmount - commission;

    // USD received = amount after commission / exchange rate
    const usdReceived = afterCommission / exchangeRate;

    console.log("Commission: R" + commission.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    console.log("After commission: R" + afterCommission.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    console.log("USD received: $" + usdReceived.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));

}



// Challenge 11

// 1. item1Price is a string because it has quotation marks.
// It should be a number so we can calculate with it.

// 2. item2Price is also a string.
// This can cause JavaScript to join values instead of adding them.

// 3. quantity is a string instead of a number.
// It should be a number because it represents how many items were bought.

// 4. The subtotal uses + with strings.
// This can join the prices instead of adding them correctly.

// 5. Multiplication happens before addition.
// This means only item3Price is multiplied by quantity.

// 6. == is used instead of ===.
// === checks both the value and the data type.

// 7. If the subtotal is wrong, the discount amount will also be wrong.
// The subtotal must be calculated correctly first.

// 8. isLoggedIn is the string "true", not the boolean true.
// Non-empty strings are treated as true in conditions.

// 9. customerAge is null, meaning the age is unknown.
// We should check that the age exists before using it.

// 10. The checkout condition checks if the age is greater than 18.
// A customer who is exactly 18 should also be allowed.

// 11. seniorDiscount returns null when there is no discount.
// It is better to use 0 because no discount means zero money.

// 12. Subtracting null makes JavaScript treat it as 0.
// Using 0 directly makes the calculation easier to understand.

```javascript
const item1Price = 199.99;
const item2Price = 49.50;
const item3Price = 125;
const quantity = 2;

const discountCode = "SAVE10";
const isLoggedIn = true;
const customerAge = null;

const subtotal = (item1Price + item2Price + item3Price) * quantity;
console.log("Subtotal: R" + subtotal.toFixed(2));

const discount = discountCode === "SAVE10" ? 0.1 : 0;
const discountAmount = subtotal * discount;
const afterDiscount = subtotal - discountAmount;

const vat = afterDiscount * 0.15;
const total = afterDiscount + vat;

const canCheckout = isLoggedIn && customerAge !== null && customerAge >= 18;
console.log("Can checkout?", canCheckout);

const seniorDiscount = customerAge !== null && customerAge >= 60 ? total * 0.05 : 0;
const finalTotal = total - seniorDiscount;

console.log("Discount: R" + discountAmount.toFixed(2));
console.log("VAT: R" + vat.toFixed(2));
console.log("Senior discount: R" + seniorDiscount.toFixed(2));
console.log("Final total: R" + finalTotal.toFixed(2))

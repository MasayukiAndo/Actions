
function showEnv(srcStr) {
  let str
  for (var i = 0; i < srcStr.length; i++) {
    str += srcStr[i] + ' ';
  }
  console.log(str)
}

const env = process.env;
console.log(env.LEVEL);
console.log(env.TAGS);


showEnv(env.ENV_NAME_IS);
showEnv(env.FIREBASE_SECRETS);
showEnv(env.SECRETS_TEST_STRING);

const firebaseSecret =  JSON.parse(env.FIREBASE_SECRETS);

console.log(firebaseSecret.apiKey);
console.log(firebaseSecret.authDomain);
console.log(firebaseSecret.projectId);

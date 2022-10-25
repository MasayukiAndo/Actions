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

console.log('ENV_NAME_IS');
console.log(env.ENV_NAME_IS);
console.log('FIREBASE_SECRETS');
console.log(env.FIREBASE_SECRETS);
console.log('SECRETS_TEST_STRING');
console.log(env.SECRETS_TEST_STRING);

showEnv(env.ENV_NAME_IS);
showEnv(env.FIREBASE_SECRETS);
showEnv(env.SECRETS_TEST_STRING);

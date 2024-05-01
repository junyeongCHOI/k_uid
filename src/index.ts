function k_uid(prefix = "", length = 10): string {
  const a = 0xac00,
    z = 0xd7a3,
    r = a - z + 1;
  let result = prefix;

  const gen =
    typeof crypto !== "undefined"
      ? (): void => {
          const buffer = new Uint32Array(1);
          crypto.getRandomValues(buffer);
          result += String.fromCharCode(a + (buffer[0] % r));
        }
      : (): void => {
          result += String.fromCharCode(a + Math.floor(Math.random() * r));
        };

  for (let i = 0; i < length; i++) gen();

  return result;
}

// @ts-ignore
if (typeof window !== "undefined") window.k_uid2 = k_uid;

export default k_uid;

import { Random } from "./random";

export const Bananas: React.FC<{ randomState: Random }> = ({ randomState }) => {
  const innerRandom = randomState.child();

  return (
    <div>
      {Array(10)
        .fill(0)
        .map(() => innerRandom())
        .map((seed: number, i): JSX.Element => {
          const duration = Math.max(3, Math.floor(seed * 20));

          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 36 36"
              width="50"
              // There is nothing unique about bananas.
              key={i}
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0 60 70"
                to="360 60 70"
                dur={`${duration}s`}
                repeatCount="indefinite"
              />

              <path
                fill="#FFE8B6"
                d="M28 2c2.684-1.342 5 4 3 13-1.106 4.977-5 9-9 12s-11-1-7-5 8-7 10-13c1.304-3.912 1-6 3-7z"
              />
              <path
                fill="#FFD983"
                d="M31 8c0 3-1 9-4 13s-7 5-4 1 5-7 6-11 2-7 2-3z"
              />
              <path
                fill="#FFCC4D"
                d="M22 20c-.296.592 1.167-3.833-3-6-1.984-1.032-10 1-4 1 3 0 4 2 2 4-.291.292-.489.603-.622.912-.417.346-.873.709-1.378 1.088-2.263 1.697-5.84 4.227-10 7-3 2-4 3-4 4 0 3 9 3 14 1s10-7 10-7l4-4c-3-4-7-2-7-2z"
              />
              <path
                fill="#FFE8B6"
                d="M22 20s1.792-4.729-3-7c-4.042-1.916-8-1-11 1s-2 4-3 5 1 2 3 0 8.316-4.895 11-4c3 1 2 2.999 3 5z"
              />
              <path
                fill="#A6D388"
                d="M26 35h-4c-2 0-3 1-4 1s-2-2 0-2 4 0 5-1 5 2 3 2z"
              />
              <circle fill="#3E721D" cx="18" cy="35" r="1" />
              <path
                fill="#FFCC4D"
                d="M32.208 28S28 35 26 35h-4c-2 0 0-1 1-2s5 0 5-6c0-3 4.208 1 4.208 1z"
              />
              <path
                fill="#FFE8B6"
                d="M26 19c3 0 8 3 7 9s-5 7-7 7h-2c-2 0-1-1 0-2s4 0 4-6c0-3-4-7-6-7 0 0 2-1 4-1z"
              />
              <path
                fill="#FFD983"
                d="M17 21c3 0 5 1 3 3-1.581 1.581-6 5-10 6s-8 1-5-1 9.764-8 12-8z"
              />
              <path
                fill="#C1694F"
                d="M2 31c1 0 1 0 1 .667C3 32.333 3 33 2 33s-1-1.333-1-1.333S1 31 2 31z"
              />
            </svg>
          );
        })}
    </div>
  );
};

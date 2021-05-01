import { HobbyInterface } from "./hobbymodel.";

export interface UserInterface {
  firstName: string | null | undefined;
  username: string | null | undefined;
  lastName: string | null | undefined;
  email: string | null | undefined;
  password: string | null | undefined;
  hobbies: HobbyInterface[]
}

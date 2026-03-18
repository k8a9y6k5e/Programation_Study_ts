import { TestNamespace } from "./modules.js";

declare module "./modules.js"{
    export namespace TestNamespace{
        export interface newEmail{
            email:string;
            author:string;
            read:boolean;
        }
    }
}
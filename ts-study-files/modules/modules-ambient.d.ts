//ambient modules - provide type information for modules that have no ts declaration
//but is avaible at global scope

declare module "exampleAmbientModule"{
    export interface Car{
        model : string;
        brand : string;
    }
}
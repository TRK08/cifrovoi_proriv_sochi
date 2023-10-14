declare module "*.vue" {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

export interface IResult {
    number: string,
    datetime: string,
    wagon_type: string,
    filename: string,
    img: string
}

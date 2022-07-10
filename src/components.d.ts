/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AlxNavItem {
        "ariaExpanded": boolean;
        "depth": number;
        "hasChildren": boolean;
        "label": string;
        "parentExpanded": boolean;
        /**
          * Properties **********************
         */
        "url": string;
    }
}
declare global {
    interface HTMLAlxNavItemElement extends Components.AlxNavItem, HTMLStencilElement {
    }
    var HTMLAlxNavItemElement: {
        prototype: HTMLAlxNavItemElement;
        new (): HTMLAlxNavItemElement;
    };
    interface HTMLElementTagNameMap {
        "alx-nav-item": HTMLAlxNavItemElement;
    }
}
declare namespace LocalJSX {
    interface AlxNavItem {
        "ariaExpanded"?: boolean;
        "depth"?: number;
        "hasChildren"?: boolean;
        "label"?: string;
        /**
          * Events **********************
         */
        "onMenuItemToggled"?: (event: CustomEvent<any>) => void;
        "parentExpanded"?: boolean;
        /**
          * Properties **********************
         */
        "url"?: string;
    }
    interface IntrinsicElements {
        "alx-nav-item": AlxNavItem;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "alx-nav-item": LocalJSX.AlxNavItem & JSXBase.HTMLAttributes<HTMLAlxNavItemElement>;
        }
    }
}

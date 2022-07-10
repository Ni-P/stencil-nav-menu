import {
  Component,
  Element,
  Prop,
  Host,
  Listen,
  Watch,
  Event,
  h,
  EventEmitter
} from "@stencil/core";

@Component({
  tag: "alx-nav-item",
  styleUrl: "alx-nav-item.scss",
  shadow: false
})
export class AlxNavItem {
  /** Element ***********************/

  @Element() el: HTMLElement;

  /** Properties ***********************/

  @Prop({ mutable: true }) url: string = "";
  @Prop({ mutable: true }) label: string = "";
  @Prop({ mutable: true }) ariaExpanded: boolean = false;
  @Prop({ mutable: true, reflect: true }) depth: number = 0;
  @Prop({ mutable: true }) hasChildren: boolean = null;
  @Prop({ mutable: true, reflect: true }) parentExpanded: boolean = false;

  @Watch("ariaExpanded")
  expandedHandler(newValue: boolean) {
    const children = Array.prototype.slice.call(this.el.children);
    children.forEach((child) => (child.parentExpanded = newValue));
    this.menuItemToggled.emit({ expanded: this.ariaExpanded });
  }

  /** Events ***********************/

  @Event() menuItemToggled: EventEmitter;

  /** Event Listeners ***********************/

  @Listen("handleClick") handleClick(e) {
    if (this.hasChildren) {
      e.preventDefault();
      this.ariaExpanded = !this.ariaExpanded;
    }
  }

  /** Lifecycle methods ***********************/

  componentWillRender() {
    this.hasChildren = !!this.el.hasChildNodes();
    let parentMenu = this.el.closest("alx-nav-item");

    let nextParentMenu;
    this.depth = 0;

    while (parentMenu) {
      nextParentMenu = parentMenu.parentElement.closest("alx-nav-item");
      if (nextParentMenu === parentMenu) {
        break;
      } else {
        parentMenu = nextParentMenu;
        this.depth = this.depth + 1;
      }
    }
  }

  render() {
    const leftIndent = this.depth > 2 ? 10 * this.depth + "px" : "10px";

    return (
      <Host role="menuitem">
        <a
          href={this.url}
          tabindex={this.parentExpanded || this.depth === 1 ? "0" : "-1"}
          aria-haspopup={this.hasChildren.toString()}
          aria-expanded={
            this.hasChildren ? this.ariaExpanded.toString() : this.ariaExpanded
          }
          onClick={(e) => this.handleClick(e)}
          style={{ paddingLeft: leftIndent }}
        >
          {this.label}
        </a>

        {this.hasChildren && (
          <div class="alx-menu-children" role="menu" aria-label={this.label}>
            <slot />
          </div>
        )}
      </Host>
    );
  }
}

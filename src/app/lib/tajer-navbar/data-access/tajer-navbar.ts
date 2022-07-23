import { TajerLogoComponent } from '../../shared/ui/tajer-logo.component';
import { TajerNavigationButtonComponent } from '../../shared/ui/tajer-navigation-button.component';
import { TajerSwitchButtonComponent } from '../../shared/ui/tajer-switch-button.component';

export interface TajerNavbar {
  tajerLogo: TajerLogoComponent;
  tajerNavigationButtonList: TajerNavigationButtonComponent[];
  tajerSwitchButton: Partial<TajerSwitchButtonComponent>;
}

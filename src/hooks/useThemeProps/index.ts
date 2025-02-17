import {useContext, createContext} from 'react';
import {useColorScheme} from 'react-native';
import * as Modifiers from '../../commons/modifiers';
import {ThemeManager} from 'style';

const EmptyContext = createContext({});

const useThemeProps = (props: any, componentName: string) => {
  // Note: This adds a dependency on current color scheme and update theme props accordingly
  useColorScheme();
  const themeContext = ThemeManager.getThemeContext();
  const context = useContext(themeContext ?? EmptyContext);
  return Modifiers.getThemeProps(props, context, componentName);
};

export default useThemeProps;

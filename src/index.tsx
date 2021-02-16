import { NativeModules } from 'react-native';

type GraphicsType = {
  multiply(a: number, b: number): Promise<number>;
};

const { Graphics } = NativeModules;

export default Graphics as GraphicsType;

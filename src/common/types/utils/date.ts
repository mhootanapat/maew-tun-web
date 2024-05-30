export interface IToDateTimeStringOptions {
  showTime?: boolean;
  showSecond?: boolean;
}

export interface IToDateTimeString {
  options?: IToDateTimeStringOptions;
  date?: string;
  locale?: string;
}

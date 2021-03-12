export type Action = { type: EAtions; payload?: string };

export enum EAtions {
  ISSData,
}

export const getISSData = (): Action => ({
  type: EAtions.ISSData,
});

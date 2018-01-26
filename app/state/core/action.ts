export interface Action<TPayload> {
  type: string;
  payload?: TPayload;
}

export function create<TPayload>(type: string, payload: TPayload): Action<TPayload> {
  return {
    type: type,
    payload: payload
  };
}
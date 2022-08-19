import { makeAutoObservable } from 'mobx';

type LoadingProps = {
  loading: boolean;
  translucent?: boolean;
};

class LoadingStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  private _isLoading = false;
  private _isTranslucent = true;

  setLoading({ loading, translucent = true }: LoadingProps) {
    this._isLoading = loading;
    this._isTranslucent = translucent;
  }

  get isLoading() {
    return this._isLoading;
  }

  get isTranslucent() {
    return this._isTranslucent;
  }
}

const loadingStore = new LoadingStore();

export { loadingStore };

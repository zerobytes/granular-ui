import { Form as HTMLForm, context, after, when } from '@granularjs/core';
import { cx, splitPropsChildren } from '../utils.js';
import { Loading } from './Loading.js';
import { LoadingOverlay } from './LoadingOverlay.js';

export const formContext = context({ loading: false });

export function Form(...args) {
  const { props, children } = splitPropsChildren(args, {});
  const { loading, loaderVariant, loaderSize, ...rest } = props;

  const formScope = formContext.scope({ loading: loading?.get() ?? false });

  after(loading).change(next => {
    formScope.set({ loading: next });
  })

  return formScope.serve(HTMLForm({ loading, ...rest },
    LoadingOverlay({ visible: formScope.loading, variant: loaderVariant, size: loaderSize }),
    children
  ));
}

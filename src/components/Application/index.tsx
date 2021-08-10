import React from "react";

import {
  Container,
  SearchField,
  SearchIDField,
  NoSearchField,
  NoFilterField,
  Actions,
} from "./styles/application";

type Props = {
  onClick?: any;
  children?: React.ReactNode;
  id?: any;
  openDetails?: boolean;
  setOpenDetails?: (open: boolean) => any;
  sent?: boolean;
  processing?: boolean;
  rejected?: boolean;
  accepted?: boolean;
};

export default function Application({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}

Application.SearchIDField = function ApplicationSearchIDField({
  id,
  children,
  ...restProps
}: Props) {
  return (
    <SearchIDField {...restProps}>
      <p>
        {children} <span>{id}</span>
      </p>
    </SearchIDField>
  );
};

Application.SearchField = function ApplicationSearchField({
  children,
  ...restProps
}: Props) {
  return (
    <SearchField {...restProps}>
      <p>{children}</p>
    </SearchField>
  );
};

Application.NoSearchField = function ApplicationNoSearchField({
  sent,
  rejected,
  processing,
  accepted,
  children,
  ...restProps
}: Props) {
  return (
    <NoSearchField
      sent={sent}
      rejected={rejected}
      processing={processing}
      accepted={accepted}
      {...restProps}
    >
      <p>{children}</p>
    </NoSearchField>
  );
};

Application.NoFilterField = function ApplicationNoFilterField({
  children,
  ...restProps
}: Props) {
  return (
    <NoFilterField {...restProps}>
      <p>{children}</p>
    </NoFilterField>
  );
};

Application.Actions = function ApplicationActions({
  openDetails,
  setOpenDetails,
  children,
  ...restProps
}: Props) {
  return (
    <Actions {...restProps}>
      <button>
        <i className="fas fa-ellipsis-v"></i>
      </button>
      <button onClick={() => setOpenDetails!(!openDetails)}>
        <i className="fas fa-level-down-alt"></i>
      </button>
    </Actions>
  );
};

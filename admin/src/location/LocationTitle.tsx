import React from "react";
import { Link } from "react-router-dom";
import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { api } from "../api";
import { Location } from "../api/location/Location";

type Props = { id: string };

export const LocationTitle = ({ id }: Props) => {
  const { data, isLoading, isError, error } = useQuery<
    Location,
    AxiosError,
    [string, string]
  >(["get-/api/locations", id], async (key: string, id: string) => {
    const response = await api.get(`${"/api/locations"}/${id}`);
    return response.data;
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error?.message}</span>;
  }

  return (
    <Link to={`${"/api/locations"}/${id}`} className="entity-id">
      {data?.name && data?.name.length ? data.name : data?.id}
    </Link>
  );
};

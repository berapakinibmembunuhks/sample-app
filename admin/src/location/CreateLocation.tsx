import * as React from "react";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { AxiosError } from "axios";
import { Formik } from "formik";
import {
  Form,
  EnumFormStyle,
  Button,
  FormHeader,
  Snackbar,
  TextField,
} from "@amplication/design-system";
import { api } from "../api";
import useBreadcrumbs from "../components/breadcrumbs/use-breadcrumbs";
import { Location } from "../api/location/Location";
import { LocationCreateInput } from "../api/location/LocationCreateInput";

const INITIAL_VALUES = {} as LocationCreateInput;

export const CreateLocation = (): React.ReactElement => {
  useBreadcrumbs("/locations/new", "Create Location");
  const history = useHistory();

  const [create, { error, isError, isLoading }] = useMutation<
    Location,
    AxiosError,
    LocationCreateInput
  >(
    async (data) => {
      const response = await api.post("/api/locations", data);
      return response.data;
    },
    {
      onSuccess: (data, variables) => {
        history.push(`${"/locations"}/${data.id}`);
      },
    }
  );
  const handleSubmit = React.useCallback(
    (values: LocationCreateInput) => {
      void create(values);
    },
    [create]
  );
  return (
    <>
      <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
        <Form
          formStyle={EnumFormStyle.Horizontal}
          formHeaderContent={
            <FormHeader title={"Create Location"}>
              <Button type="submit" disabled={isLoading}>
                Save
              </Button>
            </FormHeader>
          }
        >
          <div>
            <TextField label="Address" name="address" />
          </div>
          <div>
            <TextField label="Name" name="name" />
          </div>
        </Form>
      </Formik>
      <Snackbar open={isError} message={error?.response?.data?.message} />
    </>
  );
};

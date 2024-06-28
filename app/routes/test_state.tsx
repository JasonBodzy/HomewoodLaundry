import type {
    ActionFunctionArgs,
    LoaderFunctionArgs,
  } from "@remix-run/node"; // or cloudflare/deno
  import { json } from "@remix-run/node"; // or cloudflare/deno
  import { useLoaderData, Form } from "@remix-run/react";
  import { getState, setState, JSON_State } from "../components/state";
  import Machine  from "../components/machine";
  
  export async function loader({request,}: LoaderFunctionArgs) {
    const state = await getState();
    return state as unknown as JSON_State;
  }
  
  export default function Component() {
    const state = useLoaderData<typeof loader>();
    return (
      <Form method="post" action="/test_state">
        <h1>Machine 1 phone number: {state.state[0].phone_number}</h1>
  
        <input
          name="Machine0PhoneNumber"
          defaultValue={"000-000-0000"}
        />
  
        <button type="submit">Save State</button>
      </Form>
    );
  }
  
  export async function action({request,}: ActionFunctionArgs) {
    const formData = await request.formData();
    var newPhoneNumber: Machine["phone_number"] = formData.get("Machine0PhoneNumber")?.toString() ?? null;
    var state = await getState() as unknown as JSON_State;
    state.state[0].phone_number = newPhoneNumber

    await setState(state.state);
  
  
    return json({ ok: true });
  }
  
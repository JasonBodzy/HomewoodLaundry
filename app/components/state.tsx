import Machine from "~/components/machine";
import { json } from "@remix-run/node";
import { getStore } from "@netlify/blobs";

async function setState(state: Machine[]) {
    const State_Store = getStore("State_Store");
    let json_state = json({state: state})
    await State_Store.set("state", "state of the machines", {metadata: json_state})
}
async function getState() {
    const State_Store = getStore("State_Store");
    const json_state = await State_Store.getMetadata("State_Store");
    return json_state;
}

interface JSON_State {
    state: Machine[];
}

export { getState, setState };
export type { JSON_State };


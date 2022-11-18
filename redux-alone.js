import { createStore } from "redux";
const initialState = { alumnosSuspensos: [], alumnosAprobados: [] };

function reducer(state = initialState, action) {
  console.log("reducer", action);
  switch (action.type) {
    case "APROBAR": {
      const nextState = {
        ...state,
        alumnosAprobados: [...state.alumnosAprobados, action.payload],
      };
      return nextState;
    }
    case "SUSPENDER": {
      const nextState = {
        ...state,
        alumnosSuspensos: [...state.alumnosSuspensos, action.payload],
      };
      return nextState;
    }
    case 'SUSPENDER_TODOS': {
        const nextState = {
            ...state,
            alumnosSuspensos: [...state.alumnosSuspensos, ...state.alumnosAprobados],
            alumnosAprobados: [],
        };
        return nextState;
    }

    default:
      if (action.type.startsWith("@@redux")) {
        return state;
      }
      throw new Error("Action type not found");
  }
}
let store = createStore(reducer);
{
  store.subscribe(() => {
    console.log("Suscripción a cambios en el store");
    const state = store.getState();

    state.alumnosAprobados = [];
    console.log(store.getState());

  });
}


function createAprobarAction(alumno) {
  return {
    type: "APROBAR",
    payload: alumno,
  };
}


store.dispatch(createAprobarAction("Pepe"));

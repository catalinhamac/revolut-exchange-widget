import reducer, {
  initialState,
  setCurrencyIn,
  setValueIn,
  setValueOut,
  setCurrencyOut,
  selectCurrency,
  selectValues,
  Selection,
  selectSelection,
  setSelectionIn,
  setSelectionOut,
  setConvert,
  setCardSwitchDirectionUp,
  selectIsCardSwitchDirectionUp,
  setEchangedSuccess,
  slice,
} from "../currencies-slice";

describe("currencies-slice", () => {
  it("setCurrencyIn", () => {
    const newState = reducer(
      initialState,
      setCurrencyIn(initialState.currency.in)
    );
    const appState = { [slice.name]: newState };

    expect(selectCurrency(appState)).toEqual({
      in: initialState.currency.in,
      out: initialState.currency.out,
    });
  });

  it("setCurrencyOut", () => {
    const newState = reducer(
      initialState,
      setCurrencyOut(initialState.currency.out)
    );
    const appState = { [slice.name]: newState };

    expect(selectCurrency(appState)).toEqual({
      in: initialState.currency.in,
      out: initialState.currency.out,
    });
  });

  it("setValueIn", () => {
    const newState = reducer(initialState, setValueIn(initialState.values.in));
    const appState = { [slice.name]: newState };

    expect(selectValues(appState)).toEqual({
      in: initialState.values.in,
      out: initialState.values.out,
    });
  });

  it("setValueOut", () => {
    const newState = reducer(
      initialState,
      setValueOut(initialState.values.out)
    );
    const appState = { [slice.name]: newState };

    expect(selectValues(appState)).toEqual({
      in: initialState.values.in,
      out: initialState.values.out,
    });
  });

  it("setSelectionIn", () => {
    const newState = reducer(initialState, setSelectionIn());
    const appState = { [slice.name]: newState };

    expect(selectSelection(appState)).toEqual(Selection.In);
  });

  it("setSelectionOut", () => {
    const newState = reducer(initialState, setSelectionOut());
    const appState = { [slice.name]: newState };

    expect(selectSelection(appState)).toEqual(Selection.Out);
  });

  it("setConvert", () => {
    const newState = reducer(initialState, setConvert());
    const appState = { [slice.name]: newState };

    expect(selectValues(appState)).toEqual(initialState.values);
  });

  it("setCardSwitchDirectionUp", () => {
    const newState = reducer(
      initialState,
      setCardSwitchDirectionUp(initialState.isCardSwitchDirectionUp)
    );
    const appState = { [slice.name]: newState };

    expect(selectIsCardSwitchDirectionUp(appState)).toEqual(
      initialState.isCardSwitchDirectionUp
    );
  });

  it("setEchangedSuccess", () => {
    const newState = reducer(
      initialState,
      setEchangedSuccess(initialState.isEchangedSuccess)
    );
    const appState = { [slice.name]: newState };

    expect(selectIsCardSwitchDirectionUp(appState)).toEqual(
      initialState.isEchangedSuccess
    );
  });
});

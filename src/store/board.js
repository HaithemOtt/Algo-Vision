import { createSlice } from "@reduxjs/toolkit";

const boardConfig = createSlice({
  name: "board",
  initialState: {
    dimensions: {
      height: null,
      width: null,
      maxHeight: null,
      maxWidth: null,
      nodeSize: 35,
    },
    view: {
      isBorders: true,
      perspective: 2500,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 0.9,
      isReset: false,
    },
    grid: [],
  },
  reducers: {
    boardChanged: (state, { payload }) => {
      const { prop, att, val } = payload;
      state[prop][att] = val;
    },
    dimensionsChanged: (state, { payload }) => {
      const { att, val } = payload;
      state.dimensions[att] = val;
    },
    boardResized: (state, { payload }) => {
      const { height, width } = payload;
      state.dimensions.height = height;
      state.dimensions.maxHeight = height;
      state.dimensions.width = width - 200;
      state.dimensions.maxWidth = width;
    },
    viewChanged: (state, { payload }) => {
      const { att, val } = payload;
      state.view[att] = val;
    },
    gridChanged: (state, { payload }) => {
      state.grid = payload;
    },
    gridInitialized: (state, { payload }) => {
      state.grid = payload;
    },
    visualSettingsReset: (state) => {
      state.view = {
        perspective: 2500,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 0.9,
        isBorders: true,
        isReset: !state.view.isReset,
      };
    },
    boardSettingReset: (state) => {
      state.dimensions = {
        ...state.dimensions,
        height: state.dimensions.maxHeight,
        width: state.dimensions.maxWidth,
        nodeSize: 35,
      };
    },
  },
});

export default boardConfig.reducer;

export const {
  tableChanged,
  dimensionsChanged,
  viewChanged,
  gridChanged,
  gridInitialized,
  visualSettingsReset,
  boardSettingReset,
  boardResized,
} = boardConfig.actions;

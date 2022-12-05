import styled from "styled-components";
const theme = {
  green: "#2FBE34",
  yellow: "#FF922E",
  red: "#FF3030",
  gray: "#333333",
};

export const Container = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
  }

  &.open {
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #ffffd5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    align-items: start;
    flex-direction: column;
    justify-content: space-between;

    > p {
      font-weight: 400;
      margin-bottom: 10px;
    }

    > img {
      position: absolute;
      bottom: 10px;
      right: 10px;
    }

    &.back {
      > .buttons {
        width: 100%;
        display: flex;
        justify-content: space-between;
        > button {
          width: 90px;
          font-family: "Recursive";
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #ffffff;
          background: blue;
          border-radius: 5px;
          border: 1px solid blue;
          padding: 5px;

          &.red {
            border: ${theme.red};
            background: ${theme.red};
          }

          &.yellow {
            border: ${theme.yellow};
            background: ${theme.yellow};
          }

          &.green {
            border: ${theme.green};
            background: ${theme.green};
          }
        }
      }
    }
  }

  &.finished {
    text-decoration: line-through;

    &.red {
      color: ${theme.red};
    }

    &.yellow {
      color: ${theme.yellow};
    }

    &.green {
      color: ${theme.green};
    }
  }
`;

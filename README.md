# Nextwave

This is Nextwave, an ambitious endeavor aimed at making the online world a better place. For this platform, there is no singular end-goal. Instead, there are numerous objectives that will evolve and expand as the journey progresses.

Nextwave is a platform shaped not only by its creators but also by its users. While users are integral to any platform's success, Nextwave goes further by actively involving them in its development. Once the platform goes live, there will be polls to gather input on what features to prioritize next. Additionally, users can contribute to the design, development, and maintenance of the platform.

More information will be provided over time.

The initial goal is to create a basic platform with a functioning user system and other features that are easy to integrate.

If you have any questions or would like to help develop it, please contact me. 

````Css
.inputFieldDiv{
  width: 100%;
  height: 60px;
  position: relative;
  font-size: 18px;

  &:hover {
    border-radius: 15px;
    height: 62px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

    label{
      font-size: 18px;
    }

    .inputFieldButtonShadowDiv{
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    }

    .inputFieldButton{
      top: 13.5px;
      height: 36px;

      &:hover{
        width: 37px;
        height: 37px;
        top: 13px;
        right: -17px;

        .inputFieldButtonSvgDiv svg path{
          stroke-width: 0.5px;
          stroke: var(--MainDefault);
        }

        .inputFieldButtonShadowDiv{
          height: 37px;
          width: 18.5px;
          box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

        }
      }
    }

    .inputFieldButtonSvgDiv{
      height: 24px;
    }
  }
}


.inputFieldContainer {
  display: inline-flex;
  height: 100%;
  top: 0;
  left: 0;
  width: 100%;
}

input{
  display: flex;
  height: 100%;
  width: 100%;
  background-color: transparent;
  border-radius: 15px;
  border: 3px solid var(--MainDefault);
  flex: 1;
  padding-left: 15px;
  padding-right: 0 !important;
  outline: none;
}

label {
  padding: 18px 0 18px 20px;
  pointer-events: none;
  left: 0;
  top: 0;
  transition: 0.2s;
  position: absolute;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  opacity: 0.5;
  height: 100%;
  background: transparent;
  font-size: 18px;
}

input:focus + label,
.valid{
  padding: 2px;
  margin-left: 15px;
  top: -13px;
  opacity: 1;
  background: var(--DivBackground);
  display: inline;
  height: 20px;
}

.inputFieldButtonDiv{
  width: 20px;
  height: 100%;
  position: absolute;
  right: 0;

}

.inputFieldButton{
  display: flex;
  height: 35px;
  width: 35px;
  top: 12.5px;
  right: -16px;
  margin: 0;
  padding: 0;
  position: absolute;
  background: no-repeat var(--DivBackground);
  border-radius: 15px;
  border: 3px var(--MainDefault) solid;
  align-items: center;
  justify-content: center;
  z-index: 3;


}

.inputFieldButtonSvgDiv{
  height: 25px !important;
  width: 25px;
  display: flex;
  fill: var(--MainDefault);
  justify-content: center;
}

.inputFieldButtonShadowDiv{
  position: relative;
  right: -18.4px;
  top: 12.5px;
  height: 35px;
  width: 17.5px;
  border-radius: 0 15px 15px 0;
  z-index: 1;
}


````

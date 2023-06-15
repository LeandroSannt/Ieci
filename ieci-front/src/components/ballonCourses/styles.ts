import styled from "styled-components";

const ContentCourses = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    place-items: center;
    align-items: center;
    justify-content: center;

    margin: 34px 0;


    .slice{
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      
    }

    @media (max-width: 1100px){
      .slice{
        margin-left: 0 !important;
      }
    }

    @media (max-width: 760px){

      .slice{
        margin-left: 0 !important;
      }



      .slice:nth-child(3),
      .slice:nth-child(4),
      .slice:nth-child(5),
      .slice:nth-child(6){
        display: none;
      }

       
    }


`

export {ContentCourses}
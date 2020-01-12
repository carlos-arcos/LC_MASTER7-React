import * as React from "react";
import { MemberEntity } from "../../model/member";
import { memberAPI } from "../../api/memberAPI";
import { MemberRow } from "./memberRow";
import { MemberHead } from "./memberHead";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { FormHelperText } from "@material-ui/core";

const useStyles = makeStyles({
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end"
  }
});

interface Props { }

export const MembersTableComponent = (props: Props) => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [myOrganization, setMyOrganization] = React.useState("lemoncode");
  const { searchContainer } = useStyles(props);

  const loadMembers = () => {
    memberAPI.getAllMembers(myOrganization).then(members => setMembers(members));
  };

  return (
    <>
      <Card>
        <CardHeader title="Members Page" />
        <CardContent>
          <div className={searchContainer}>
            <TextField
              label="Organization"
              margin="normal"
              value={myOrganization} onChange={e => setMyOrganization(e.target.value)}
            /> &nbsp;
            <Button variant="contained" color="primary" onClick={loadMembers}>Load</Button>
          </div>
        </CardContent>
      </Card>
      <table className="table">
        {/* <thead>
          <MemberHead />
        </thead> */}
        {/* <tbody> */}
          {members.map((member: MemberEntity) => (
            <MemberRow key={member.id} member={member} />
          ))}
        {/* </tbody> */}
      </table>

    </>
  );
};

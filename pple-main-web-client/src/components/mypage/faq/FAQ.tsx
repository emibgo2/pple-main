import React, { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  styled,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import MyPageElementHeader from '../MyPageElementHeader';
import SearchInput from '../../common/input/SearchInput';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import document from './FAQDoc';
import { TabContext, TabList, TabPanel } from '@mui/lab';

const SearchBox = styled('div')({ padding: '0px 17px' });
const StyledTabList = styled(TabList)({
  '& .css-1aquho2-MuiTabs-indicator': {
    background: '#FF6969',
  },
});

const StyledTab = styled(Tab)({
  fontSize: '16px',
  fontWeight: 'bold',
  '&.Mui-selected': {
    color: '#FF6969',
  },
});

const StyledAccordionSummary = styled(AccordionSummary)({
  padding: '10px 37px',
  fontWeight: 'bolder',
  color: '#222222',
});

const StyledAccordionDetails = styled(AccordionDetails)({
  background: '#F4F4F4',
  padding: '15px 40px',
  color: '#767676',
});

const FAQ = () => {
  const [value, setValue] = useState('0');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      <MyPageElementHeader title="FAQ" />
      <SearchBox>
        <SearchInput placeholder="무엇을 도와드릴까요?" />
      </SearchBox>
      <TabContext value={value}>
        <StyledTabList
          className="hihi"
          onChange={handleChange}
          aria-label="select faq"
          variant="fullWidth"
        >
          <StyledTab
            value="0"
            sx={{ fontSize: '16px', fontWeight: 'bold' }}
            label="헌혈관련"
          ></StyledTab>
          <StyledTab
            value="1"
            sx={{ fontSize: '16px', fontWeight: 'bold' }}
            label="앱 이용 관련"
          ></StyledTab>
        </StyledTabList>
        <TabPanel value="0" sx={{ padding: '0px' }}>
          {document.donation.map((doc, idx) => (
            <Accordion key={idx}>
              <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{doc.title}</Typography>
              </StyledAccordionSummary>
              <StyledAccordionDetails>
                <Typography>{doc.content}</Typography>
              </StyledAccordionDetails>
            </Accordion>
          ))}
        </TabPanel>
        <TabPanel value="1" sx={{ padding: '0px' }}>
          {document.donation.map((doc, idx) => (
            <Accordion key={idx}>
              <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{doc.title}</Typography>
              </StyledAccordionSummary>
              <StyledAccordionDetails>
                <Typography>{doc.content}</Typography>
              </StyledAccordionDetails>
            </Accordion>
          ))}
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default FAQ;

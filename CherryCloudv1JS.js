<script src="Cherry Cloudv1HTML.html" integrity="Cherry Cloudv1HTML.html" crossorigin="anonymous"></script>


const selectElement = document.querySelector('select');

const leasing = document.getElementById('Leasing');
const renewals = document.getElementById('Renewals');
const delinquency = document.getElementById('Delinquency');
const maintenance = document.getElementById('Maintenance');
const management = document.getElementById('Management');
const acquisitions = document.getElementById('Acquisitions');

selectElement.addEventListener('change', function() {
    const selectedOption = selectElement.value;

    leasing.style.display = 'none';
    renewals.style.display = 'none';
    delinquency.style.display = 'none';
    maintenance.style.display = 'none';
    management.style.display = 'none';
    acquisitions.style.display = 'none';

    if (selectedOption === 'Leasing') {
        leasing.style.display = 'block';
    } else if (selectedOption === 'Renewals') {
        renewals.style.display = 'block';
    } else if (selectedOption === 'Delinquency') {
        delinquency.style.display = 'block';
    } else if (selectedOption === 'Maintenance') {
        maintenance.style.display = 'block';
    } else if (selectedOption === 'Management') {
        management.style.display = 'block';
    } else if (selectedOption === 'Acquisitions') {
        acquisitions.style.display = 'block';
    }
});



/*Leasing*/
function collectLeasingData() {
    var newProspectsWTD = prompt("How many new prospects were there this past week?");
    var newProspectsMTD = prompt("How many new prospects were there this past month?");
    var newProspectsQTD = prompt("How many new prospects were there this past quarter?");
    var newProspectsYTD = prompt("How many new prospects were there this past year?");
    
    alert("WTD: " + newProspectsWTD + "\nMTD: " + newProspectsMTD + "\nQTD: " + newProspectsQTD + "\nYTD: " + newProspectsYTD);
    
    const firstTour = 'First Tour';
    let closingRatio = 30; 
    let successfulConversion = true;

    if (closingRatio >= 30) {
        successfulConversion = true; 
        console.log(successfulConversion);}
    

    var visitsWTD = prompt("How many visits were there this past week?");
    var visitsMTD = prompt("How many visits were there this past month?");
    var visitsQTD = prompt("How many visits were there this past quarter?");
    var visitsYTD = prompt("How many visits were there this past year?");
    
    alert("WTD: " + visitsWTD + "\nMTD: " + visitsMTD + "\nQTD: " + visitsQTD + "\nYTD: " + visitsYTD);

	if (visits >= )

    /*netLeases = Input number that is calculated from Gross applications-leases executed*/
	var netLeasesWTD = prompt("How many leases were there this past week?");
    var netLeasesMTD = prompt("How many leases were there this past month?");
    var netLeasesQTD = prompt("How many leases were there this past quarter?");
    var netLeasesYTD = prompt("How many leases were there this past year?");
    alert(netLeasesWTD, netLeasesMTD, netLeasesQTD, netLeasesYTD);

	/*closingRatio = Input number that is calculated from Gross visits divided by gross applications*/
    var closingRatioWTD = prompt("What was the closing ratio for this week?");
    var closingRatioMTD = prompt("What was the closing ratio for this month?");
    var closingRatioQTD = prompt("What was the closing ratio for this past quarter");
    var closingRatioYTD = prompt("What was the closing ratio for this past year?");
    alert(closingRatioWTD, closingRatioMTD, closingRatioQTD, closingRatioYTD);

	/*Leased(%) = percentage of units currently with executed leases*/
    var leasedPercentageWTD = prompt("How many leases were executed this week?");
    var leasedPercentageMTD = prompt("How many leases were executed this month?");
    var leasedPercentageQTD = prompt("How many leases were executed this quarter?");
    var leasedPercentageYTD = prompt("How many leases were executed this year?");
    alert(leasedPercentageWTD, leasedPercentageMTD, leasedPercentageQTD, leasedPercentageYTD);

	/*Occupancy(%) = percentage of units occupied*/
    var occupanyPercentageWTD = prompt("What is the occupancy percent for the week?");
    var occupanyPercentageMTD = prompt("What is the occupancy percent for the month?");
    var occupanyPercentageQTD = prompt("What is the occupancy percent for the quarter?");
    var occupanyPercentageYTD = prompt("What is the occupancy percent for the year?");
    alert(occupanyPercentageWTD, occupanyPercentageMTD, occupanyPercentageQTD, occupanyPercentageYTD);

	var googleScoreWTD = prompt("What is the google score this week?");
    var googleScoreMTD = prompt("What is the point increase or decrease this month?");
    var googleScoreQTD = prompt("What is the point increase or decrease this quarter?");
    var googleScoreYTD = prompt("What is the point increase or decrease this year?");
    alert(googleScoreWTD, googleScoreMTD, googleScoreQTD, googleScoreYTD);

    /*totalVacant = Total number of units - units occcupied*/
	var totalVacant = prompt("What are the total units not currently occupied?");


    /*units designated as being used for admin purposes or maintence has determined as unsellable*/
    var downAdmin = prompt("How many units are designated as being used for admin purposes or maintence has determined as unsellable?");
   

	/*out of all the vacant units, how many are sold with an executed lease agreement?*/
    var totalVacantLeased = prompt("Out of all the vacant units, how many are sold with an executed lease agreement?");
    

	/*out of all the vacant units, how many are not sold with an executed lease agreement?*/
    var totalVacantNotLeasedWTD = prompt("Out of all the vacant units, how many are not sold with an executed lease agreement?");
    

	/*out of all the vacant units, how many are not sold & are not 'made ready'?*/
    var totalVacantNotLeasedNotReadyWTD = prompt("Out of all the vacant units, how many are not sold & are not 'made ready'?");
    
	/*out of all the vacant units, how many are sold & are not 'made ready'?*/
    var totalVacantNotLeasedReadyWTD = prompt("Out of all the vacant units, how many are sold & are not 'made ready'?");
   

	/*for the next 30 day period how many units are expected to be vacant based on NTV's?*/
    var totalNTVNext30DaysWTD = prompt("For the next 30 day period how many units are expected to be vacant based on NTV's?");
	}
	collectLeasingData();


b: Renewals

    var totalLeasesExpiring = prompt("What are the total number of leases expiring?"/*This can be percentage or actual number*/);

	var leasesExpiringRenewed = prompt("What are the total number of leases expiring that have renewed(new leases executed but not in effect)?"/*This can be percentage or actual number*/);

	var leasesExpiringWillRenew = prompt("How many leases are expiring that will be renewed?"/*This can be a percentage or actual number */);

	var leasesExpiringNTV = prompt("How many leases are expiring that we have recieved NTV's for?"/*This can be percentage or actual number*/);

	var leasesExpiringGoingMTM = prompt("How many of the leases expiring are going Month-to-Month?"/*This can be percentage or actual number*/);

	var leasesExpiringNoResponse = prompt("How many of the leases expiring have not given their response to renew?"/*This can be percentage or actual number*/);

	var totalMTM = prompt("How many of the total leases are going Month-to-Month?"/*This can be percentage or actual number*/);

	var mtmDueToEvictionProceeding = prompt("How many of those units that are MTM are due for evication(can not renew because of balance due)?"/*This can be percentage or actual number*/);

	var willStayMTM = prompt("How many units will continue as mtm(out of the units currently MTM how many have renewed, vacated, or evicted)?)");

	var ntv = prompt("How many units are on notice to vacate?");

	var willRenew = prompt("How many units will renew? Units that have given intention to renew but now executed lease");

c: Delinquency
    var totalResidentsDelinquent ($1,000 +) 30 days = prompt("How many residents are deliquent in the past 30days with a balance of $1,000 or greater?");
	if (totalResidentsDelinquent === $1000 + '30 days' || "Balance owed") {
		alert("submit intent to file");
	} else if (totalResidentsDelinquent === $1000 && "acount in grace period") {
		alert("send reminder balance is due and late fees are to begin accruing");
	} else (!( totalResidentsDelinquent === $1000)){
		alert("monitor account");
	}

	var totalResidentsDelinquent ($1,000 +) 60 days = prompt("How many residents are deliquent in the past 60days with a balance of $1,000 or greater?");

	var totalResidentsDelinquent ($1,000 +) 90 days = prompt("How many residents are deliquent in the past 90days with a balance of $1,000 or greater?");

	var statusOnResidents in 90+ Column = prompt("Residents that have been deliquent for 90 days or more have been evicted or carry a balance?");

	var oweAtLeast ($500 +) in 90+ Column = prompt("How many of the residents that have had a balance for 90days or more have a balance of $500 plus?");
	if (oweAtLeast =< $500){
		alert("monitor");
	} else if (oweAtLeast >= $500){
		alert("review account next report");
	} else {
		alert("no balance carried");
	}

d: Maintence
    var openFromPriorPeriodWTD = prompt("How many maintenance tickets are still open from prior week?");
    var openFromPriorPeriodMTD = prompt("How many maintenance tickets are still open from prior month?");
    var openFromPriorPeriodOverdue = prompt("How many maintenance tickets are still open for month than a month?");
    alert(openFromPriorPeriodWTD, openFromPriorPeriodMTD, openFromPriorPeriodOverdue);

	var requestsRecievedWTD = prompt("How many maintenance requests have been recieved this past week?");
    var requestsRecievedMTD = prompt("How many maintenance requests have been recieved this past month?");
    var requestsRecievedQTD = prompt("How many maintenance requests have been received this past quarter?");
    var requestsRecievedYTD = prompt("How many maintenance requests have been recieved this past year?");
    alert(requestsRecievedWTD, requestsRecievedMTD, requestsRecievedQTD, requestsRecievedYTD);

	var requestsCompletedWTD = prompt("How many maintenance requests have been completed this past week?");
    var requestsCompletedMTD = prompt("How many maintenance requests have been completed this past month?");
    var requestsCompletedQTD = prompt("How many maintenance requests have been completed this past quarter?");
    var requestsCompletedYTD = prompt("How many maintenance requests have been completed this past year?");
    alert(requestsCompletedWTD, requestsCompletedMTD, requestsCompletedQTD, requestsCompletedYTD);

	var requestsOpenAtEndOfPeriodWTD = prompt("How many requests recieved are still open at the end of the week?");
    var requestsOpenAtEndOfPeriodMTD = prompt("How many requests recieved are still open at the end of the month?");
    var requestsOpenAtEndOfPeriodOverdue = prompt("How many requests recieved are still open that are now overdue?");
    alert(requestsOpenAtEndOfPeriodWTD, requestsOpenAtEndOfPeriodMTD, requestsOpenAtEndOfPeriodOverdue);


e: Management
    const accuralAccounting(All income - all expenses);

	const amountOfRentIncrease(Average Effective Rent for Renewal - Average Effective Rent on Previous Lease);

	const Annualization(Average of actual months of expenses (or income) / number of months reported x 12);

	const average Effective Rent(Total Rent Revenue / Units Occupied);

	const badDebt(Total Uncollected rent income due to non-payment);

	const breakEvenOccupanyRatio (Operating Expense + Debt Service + Replacement Reserve);

	const breakevenRentPerSquareFoot((Operating Expenses + Debt Service + Replacement Reserve)/ Total Property Square Feet);

	const capitalExpense(Large Improvements);

	const capitalizationRateOrCapRate(Net Operting Income / Purchase Price);

	const cashFlow (Net Operating Income - Debt Service - Capital Expense - Replacement Reserve);

	const cashOnCashReturn (Cash Flow / Down Payment (or initial Equity));

	const debtService(Loan/Mortgage payment);

	const effectiveGrossIncome(Gross Potential Rent - Vacancy = Total Rent Revenue + Operating Income);

	const effectiveMarketRent ((Monthly Market Rent x # of months in lease - total concessions)/ # of months in lease);

	const grossPotentialIncome(Occupied Units x Average Leased Rent + Vacant Units x Average Market Rent);

	const grossPotentialRent (Total Units x Average Market Rent);

	const leasedPercentage (Leased Units / Total Units);

	const leasedUnits (Total Units - Vacant Units - Notices to Vacate + Vacant Units Leased + Notices to Vacate Preleased);

	const netOperatingIncome (Effective Gross Income - Operating Expenses);

	const operatingExpenseRatio (Operating Expense / Effective Gross Income);

	const percentRenewalIncrease (Amount of Increase / Previous Lease Rent);

	const replacementReserve (amount set asided for future expenses and projects);

	const returnOnInvestment (Return / Investment);

	const totalRentRevenue (Gross Potential Rent - Vacancy);

	const turnoverRatio (Total Number of Move Outs / Total Number of Units);

	const vacancy/collectionLoss (Vacancy, Collection Loss, Non Revenue Units, and Concessions);

f: Aquisitions
    const interestForLoan (Interest= Principal x Rate x Time);

	const principalOnLoan ([Principal = Interest ÷ (% Rate x Time)]);

	const rateOnLoan ([Rate = Interest ÷ (Principal x Time)]);

	const netOperatingIncome (NOI = Property Value x Cap Rate);

	const propertyValue (Property Value = NOI ÷ Cap Rate);

	const capRate (Cap Rate = NOI ÷ Property Value);

	const income(Income = Amount Paid x Rate of Return);

	const amountPaid (Amount Paid = Income ÷ Rate of Return);

	const rateOfReturn (Rate of Return = Income ÷ Amount Paid);

	const increaseInValue (Increase = Purchase Price x Rate of Return);

	const purchasePrice (Purchase Price = Increase ÷ Rate of Return);

	const rateOfReturn (Rate = Increase ÷ Purchase Price);

	const loanToValue (LTV= Loan Amount / Sales price or appraised value (whichever is less));

	const loanAmount (Sales Price or appraised value(whichever is less)x Loan-to-Value(LTV));

	const salesPriceOrAppraisedPrice(Loan amount / Loan-to-Value(LTV));

	const annualInterest(loan amount(Principal) x annual interest rate);

	const principalLoanAmount (Annual Interest / Annual Interest Rate);

	const annualInterestRate (Annual Interest / Loan Amount(principal));

	const amountPaidForPoints (Loan amount x Points as Percentage of Loan);

	const loanAmount(Amount Paid for Points / Points as Percentage of Loan);

	const pointsAsPercentageOfLoan (Amount Paid for Points / Loan Amount);

	const percentageRent (Gross sales subject to percentage x % in the lease);

	const grossSalesSubjectToThePercentage (Percentage Rent / % in the lease);

	const percent/* % */InTheLease (Percentage Rent / Gross Sales Suject to the Percentage);


/*g. Corporate Leasing...Coming Soon!
calculating formula for profitability[(unit base rent from property) + (unit funishing cost) + (vacancy cost ex. unit has to be leased w/ property for 6 months
but will be occupied for 5months by client)= base cost of unit; AVG sellable rent for bed/bath mix - base cost of unit = profit margin(?) translate to percent

or

!!!!!!!!!     if, i want x% (25% profit on unit) profit on unit and my base cost's are x, what does my sellable rent need to be? !!!!!!!

)]
Market profitability, 
unit profitability, 
season/quarter profitability
avg rate differece(what is the avg difference between the rate offered by the property and the "sellable rate to client")
avg markert lease length
PULL RELEVANT FUNCTIONS FROM MGMT SECTION
*/